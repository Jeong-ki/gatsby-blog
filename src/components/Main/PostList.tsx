import styled from '@emotion/styled';
import { FunctionComponent, useMemo } from 'react';
import PostItem from './PostItem';
import { PostListItemType } from 'types/PostItem.types';

type PostListProps = {
  selectedCategory: string;
  posts: PostListItemType[];
};

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  width: 1200px;
  margin: 0 auto;
  padding: 50px 0 90px;

  @media (max-width: 1600px) {
    grid-template-columns: 1fr 1fr 1fr;
    width: 900px;
    padding: 50px 20px 80px;
  }

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    width: 768px;
    padding: 40px 20px 70px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 40px 20px;
  }
`;

const PostList: FunctionComponent<PostListProps> = function ({
  selectedCategory,
  posts,
}) {
  const postListData = useMemo(
    () =>
      posts.filter(
        ({
          node: {
            frontmatter: { categories },
          },
        }: PostListItemType) =>
          selectedCategory !== 'All'
            ? categories.includes(selectedCategory)
            : true,
      ),
    [posts, selectedCategory],
  );

  return (
    <PostListWrapper>
      {postListData.map(
        ({
          node: {
            id,
            fields: { slug },
            frontmatter,
          },
        }: PostListItemType) => (
          <PostItem {...frontmatter} link={slug} key={id} />
        ),
      )}
    </PostListWrapper>
  );
};

export default PostList;
