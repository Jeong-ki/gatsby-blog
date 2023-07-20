import React, { useEffect, useState } from 'react';

type QueryMethods = {
  difference: (args: number[]) => string;
  multiple: (args: number[]) => string;
  fibonacci: (args: number[]) => string;
};

type EventData = {
  queryMethodListener: keyof QueryMethods;
  queryMethodArguments: number[];
};

function WorkerComponent() {
  const [result, setResult] = useState('');
  const [inputNumObj, setInputNumObj] = useState({
    first: 0,
    second: 0
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputNumObj((prev) => ({
      ...prev,
      [name]: parseInt(value),
    }));
  };

  // 웹 워커 생성
  const worker = new Worker(new URL('./worker.ts', import.meta.url)); 

  const queryMethods: QueryMethods =  {
    difference: (args) => `Difference: ${args[0]}`,
    multiple: (args) => `Multiple: ${args[0]}`,
    fibonacci: (args) => `First Fibonacci: ${args[0]}, Second Fibonacci: ${args[1]}`,
  }

  useEffect(() => {
    // 웹 워커 메시지 수신 이벤트 핸들러
    worker.onmessage = (event) => {
      const { queryMethodListener, queryMethodArguments } = event.data as EventData;

      const result = queryMethods[queryMethodListener](queryMethodArguments) || "Invalid query method";
      setResult(result);
    };

    // 컴포넌트 언마운트 시 웹 워커 제거
    return () => {
      worker.terminate();
    };
  }, [worker]);

  const handleGetDifference = () => {
    worker.postMessage({
      queryMethod: 'getDifference',
      queryMethodArguments: [inputNumObj.first, inputNumObj.second],
    });
  };

  const handleGetMultiple = () => {
    worker.postMessage({
      queryMethod: 'getMultiple',
      queryMethodArguments: [inputNumObj.first, inputNumObj.second],
    });
  };

  const handleGetFibonacci = () => {
    worker.postMessage({
      queryMethod: 'getFibonacci',
      queryMethodArguments: [inputNumObj.first, inputNumObj.second],
    });
  };

  return (
    <div>
      <input name="first" type="number" placeholder='first number' onChange={handleChange} /> 
      <input name="second" type="number" placeholder='second number' onChange={handleChange} />
      <br /> 
      <button onClick={handleGetDifference}>Get Difference</button>
      <button onClick={handleGetMultiple}>Get Multiple</button>
      <button onClick={handleGetFibonacci}>Get Fibonacci</button>
      <br /> 
      <p>{result}</p>
    </div>
  );
}

export default WorkerComponent;