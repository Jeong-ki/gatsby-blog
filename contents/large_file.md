---
date: '2023-05-06'
title: 'Blob의 Slice 메소드를 사용한 대용량 파일 분할 업로드'
categories: ['JS', 'Blob', 'File']
summary: '프론트에서 대용량 파일을 업로드할 때 Blob 메소드를 사용하여 파일을 분할 업로드하는 방법.'
thumbnail: './large_file.jpeg'
---

![Thumbnail image](./large_file.jpeg)

<div class="img_wrapper">
  <p class="md_img">
    <img src="large_file.jpeg">
  </p>
</div>

웹 개발을 하다보면 파일 업로드가 필요한 경우가 있습니다. <br />
이때 파일의 크기가 커지면 업로드 시간이 길어지고, 네트워크 오류나 서버 부하 등의 문제가 발생할 수 있습니다. <br />
이러한 문제를 해결하기 위해 분할 업로드라는 기법을 사용할 수 있습니다. 분할 업로드란 파일을 작은 조각으로 나누어 업로드하는 방식입니다.
<br />라이브러리를 사용하지 않고 Blob이라는 웹 API를 이용하여 파일을 슬라이스하는 방법과, axios를 이용하여 서버에 파일 조각을 보내고 받는 방법을 간략한 설명과 함께 작성해보겠습니다.

## 분할 업로드의 이점

분할 업로드 작업을 할 시에 아래와 같은 이점을 얻을 수 있습니다.

- 업로드 시간을 단축할 수 있다. 파일을 조각으로 나누어 병렬로 업로드하면 전체적인 속도가 빨라진다.
- 파일 업로드 중에 실패하더라도 다시 처음부터 업로드 하지 않고 실패한 부분부터 업로드한다.
- 서버의 메모리 부하를 줄일 수 있다. 파일을 한 번에 받지 않고 조각으로 받으면 서버의 메모리 사용량을 줄일 수 있다.

## 예시 코드 작성

이제 파일을 분할 업로드하는 코드를 한번 작성해보겠습니다. <br />
우선, 파일을 분할하는 함수를 작성하겠습니다. 이 함수는 전달받은 파일을 지정된 크기로 잘라서 Blob 배열로 반환합니다.

```javascript
function sliceFile(file, sliceSize) {
  const slices = [];
  let start = 0;

  while (start < file.size) {
    const end = Math.min(start + sliceSize, file.size);
    const slice = file.slice(start, end);
    slices.push(slice);
    start = end;
  }

  return slices;
}
```

다음으로, Blob 배열을 받아서 병렬로 업로드하는 함수를 만들어 줍니다. <br />
이 함수는 각각의 Blob을 병렬로 업로드하고 모든 업로드가 완료되면 업로드된 파일의 URL 배열을 반환합니다.

```javascript
// FormData 객체에 파일 조각과 메타데이터 추가하는 함수
function appendFormData(formData, fileChunk, fileName, chunkIndex, chunkCount) {
  formData.append('file', fileChunk); // 파일 조각
  formData.append('fileName', fileName); // 파일 이름
  formData.append('chunkIndex', chunkIndex); // 파일 조각의 인덱스
  formData.append('chunkCount', chunkCount); // 파일 조각의 개수
}

// Blob 배열을 받아서 병렬로 업로드하는 함수
async function uploadChunks(chunks, fileName) {
  const chunkCount = chunks.length;
  const results = await Promise.allSettled(
    chunks.map(async (chunk, index) => {
      // FormData 객체 생성
      const formData = new FormData();

      // FormData에 파일 조각과 메타데이터 추가
      appendFormData(formData, chunk, fileName, index, chunkCount);

      try {
        // axios로 서버에 POST 요청 보냄
        const response = await axios.post('/upload', formData);
        console.log(response.data);

        return { status: 'fulfilled', value: index };
      } catch (error) {
        console.error(error);

        return { status: 'rejected', reason: error };
      }
    }),
  );

  return results;
}
```

마지막으로, 업로드를 하고 실패할 경우 실패한 부분부터 재시도하는 함수를 작성해줍니다.

```javascript
async function uploadFile(file, sliceSize) {
  // 파일의 크기와 이름
  const fileSize = file.size;
  const fileName = file.name;

  // 파일을 분할할 개수
  const chunkCount = Math.ceil(fileSize / sliceSize);

  // 파일을 분할하는 함수 호출
  const chunks = sliceFile(file, sliceSize);

  // 서버에 GET 요청으로 업로드된 파일 조각의 인덱스 배열 받아옴
  const response = await axios.get('/uploaded', {
    params: { fileName },
  });
  const uploadedChunks = response.data;

  // 업로드할 파일 조각을 필터링하는 함수
  function filterChunks(chunks) {
    return chunks.filter((chunk, index) => !uploadedChunks.includes(index));
  }

  // 업로드할 파일 조각을 필터링
  let uploadChunks = filterChunks(chunks);

  // 업로드 결과를 저장할 배열
  let results = [];

  // 업로드를 재시도하는 반복문
  while (uploadChunks.length > 0) {
    // 병렬 업로드 함수 호출
    const uploadResults = await uploadChunks(uploadChunks, fileName);

    // 업로드 결과를 배열에 추가
    results = results.concat(uploadResults);

    // 업로드에 실패한 파일 조각을 필터링
    uploadChunks = uploadResults
      .filter(result => result.status === 'rejected')
      .map(result => chunks[result.value]);

    // 서버에 GET 요청으로 업로드된 파일 조각의 인덱스 배열 다시 받아옴
    const response = await axios.get('/uploaded', {
      params: { fileName },
    });
    uploadedChunks = response.data;
  }

  // 업로드가 완료되었음을 알리는 메시지 출력
  console.log('Upload completed!');
}
```

이렇게 파일 분할 업로드를 Blob의 Slice를 사용해서 구현해보았습니다. 라이브러리를 사용해서 쉽게 구현할 수 있지만 한번 직접 구현해보는 것도 과정을 이해하는데 도움이 될 거라고 생각합니다.
