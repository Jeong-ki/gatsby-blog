import React, { FunctionComponent, ReactNode } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

type CategoryItemProps = {
  active: boolean;
};

type GatsbyLinkProps = {
  children: ReactNode;
  className?: string;
  to: string;
} & CategoryItemProps;

export type CategoryListProps = {
  selectedCategory: string;
  categoryList: {
    [key: string]: number;
  };
};

const CategoryListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1200px;
  margin: 60px auto 0;

  @media (max-width: 1600px) {
    width: 900px;
    margin: 60px auto 0;
    padding: 0 20px;
  }

  @media (max-width: 1200px) {
    width: 768px;
    margin: 50px auto 0;
    padding: 0 20px;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 50px;
    padding: 0 20px;
  }
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CategoryItem = styled(({ active, ...props }: GatsbyLinkProps) => (
  <Link {...props} />
))<CategoryItemProps>`
  margin-right: 10px;
  padding: 0px 10px;
  font-size: 14px;
  font-weight: ${({ active }) => (active ? '800' : '400')};
  cursor: pointer;
  border: 1px solid rgb(204, 204, 204);
  border-radius: 5px;
  line-height: 27px;
  background-color: ${({ active }) =>
    active ? 'rgb(121, 121, 121)' : 'rgb(255, 255, 255)'};
  color: ${({ active }) => (active ? 'white' : 'black')};

  &:hover {
    color: ${({ active }) => (active ? 'white' : 'black')};
  }

  &:last-of-type {
    margin-right: 0;
  }

  span {
    color: ${({ active }) => (active ? 'white' : 'rgb(170, 170, 170)')};
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const CategoryList: FunctionComponent<CategoryListProps> = function ({
  selectedCategory,
  categoryList,
}) {
  return (
    <CategoryListWrapper>
      {Object.entries(categoryList).map(([name, count]) => (
        <CategoryItem
          to={`/?category=${name}`}
          active={name === selectedCategory}
          key={name}
        >
          #{name} <span>{count}</span>
        </CategoryItem>
      ))}
    </CategoryListWrapper>
  );
};

export default CategoryList;
