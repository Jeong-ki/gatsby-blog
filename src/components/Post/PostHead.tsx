import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import PostHeadInfo, { PostHeadInfoProps } from 'components/Post/PostHeadInfo';

const PostHeadWrapper = styled.header`
  text-align: center;

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const PostHead: FunctionComponent<PostHeadInfoProps> = function ({
  title,
  date,
  categories,
}) {
  return (
    <PostHeadWrapper>
      <PostHeadInfo title={title} date={date} categories={categories} />
    </PostHeadWrapper>
  );
};

export default PostHead;
