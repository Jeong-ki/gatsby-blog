import styled from '@emotion/styled';
import { FunctionComponent } from 'react';
import PostItem from './PostItem';
import { PostListItemType } from 'types/PostItem.types';

type PostListProps = {
  posts: PostListItemType[];
};

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  width: 1200px;
  margin: 0 auto;
  padding: 50px 0 100px;

  @media (max-width: 1600px) {
    grid-template-columns: 1fr 1fr 1fr;
    width: 900px;
  }

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    width: 768px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 50px 20px;
  }
`;

const PostList: FunctionComponent<PostListProps> = function ({ posts }) {
  return (
    <PostListWrapper>
      {posts.map(({ node: { id, frontmatter } }: PostListItemType) => (
        <PostItem {...frontmatter} link="https://www.google.co.kr/" key={id} />
      ))}
    </PostListWrapper>
  );
};

export default PostList;