/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

export type PostHeadInfoProps = {
  title: string;
  date: string;
  categories: string[];
};

const PostHeadInfoWrapper = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  -webkit-justify-content: flex-start;
  justify-content: flex-start;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  max-width: 900px;
  padding: 2rem;
  margin-left: auto;
  margin-right: auto;
`;

const PostHeadInfoInner = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  -webkit-justify-content: flex-start;
  justify-content: flex-start;
  -webkit-align-items: flex-start;
  -webkit-box-align: flex-start;
  -ms-flex-align: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 0 1.5rem;
`;

const Title = styled.h2`
  text-align: left;
  color: inherit;
  font-size: 2.5rem;
  line-height: 1.5;
  font-weight: 700;
`;

const CategoryWrapper = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  position: relative;
  min-width: 1px;
  max-width: 100%;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  -webkit-justify-content: flex-start;
  justify-content: flex-start;
  -webkit-align-items: stretch;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  -webkit-flex-basis: auto;
  -ms-flex-preferred-size: auto;
  flex-basis: auto;
  box-sizing: border-box;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  -webkit-box-flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
`;

const Category = styled.span`
  display: inline-block;
  vertical-align: middle;
  border-radius: 16px;
  font-weight: 500;
  line-height: 1;
  cursor: inherit;
  font-feature-settings: tnum;
  font-variant: tabular-nums;
  text-transform: capitalize;
  white-space: nowrap;
  background: #000;
  color: #ffffff;
  border: 1px solid #000;
  padding: 3px 10px;
  font-size: 1rem;
  margin-right: 5px;
  margin: 15px 5px 15px 0;
`;

const Date = styled.span`
  color: inherit;
  font-size: 0.875rem;
  line-height: 1.5;
  color: #666;
`;

const PostHeadInfo: FunctionComponent<PostHeadInfoProps> = function ({
  title,
  date,
  categories,
}) {
  return (
    <PostHeadInfoWrapper>
      <PostHeadInfoInner>
        <Title>{title}</Title>
        <CategoryWrapper>
          {categories.map(item => (
            <Category># {item}</Category>
          ))}
        </CategoryWrapper>
        <Date>{date}</Date>
      </PostHeadInfoInner>
    </PostHeadInfoWrapper>
  );
};

export default PostHeadInfo;
