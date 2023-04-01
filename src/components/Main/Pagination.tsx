import styled from '@emotion/styled';
import React, { Fragment, FunctionComponent } from 'react';

type PaginationProps = {
  limit: number;
  perLimit: number;
  totalCnt: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const WrapPaging = styled.div`
  text-align: center;
`;
const InnerPaging = styled.div`
  display: inline-block;
  overflow: hidden;
`;
const GroupPaging = styled.span`
  float: left;
  margin: 0 13px;
`;
const LinkPaging = styled.a`
  float: left;
  width: 32px;
  height: 32px;
  padding-top: 6px;
  border-radius: 8px;
  font-size: 15px;
  line-height: 21px;
  color: #4c4c4c;
  box-sizing: border-box;
  text-align: center;
  &:hover {
    font-weight: bold;
    background-color: #f5f5f5;
    color: #1a1a1a;
  }
  &.current {
    font-weight: bold;
    color: #1a1a1a;
    cursor: default;
    text-decoration: underline;
  }
  &.move {
    font-size: 13px;
    margin-left: 4px;
  }
  &.move_disabled {
    background-color: #f5f5f5;
    color: #d9d9d9;
    cursor: default;
  }
`;

const Pagination: FunctionComponent<PaginationProps> = function ({
  limit,
  perLimit,
  totalCnt,
  currentPage,
  setCurrentPage,
}) {
  const totalPageCnt: number = Math.ceil(totalCnt / limit);
  const pageList: number[] = Array(totalPageCnt)
    .fill(0)
    .map((_, index) => index + 1);

  const isViewCondition = (item: number): boolean => {
    const nextViewPage = Math.ceil(currentPage / perLimit);
    if (nextViewPage === 1 && item <= perLimit) {
      return true;
    }
    if (nextViewPage > 1) {
      if (
        nextViewPage * perLimit >= item &&
        nextViewPage * perLimit - perLimit < item
      ) {
        return true;
      }
      return false;
    }
    return false;
  };

  return (
    <WrapPaging>
      <InnerPaging>
        {currentPage === 1 ? (
          <LinkPaging className="move move_disabled" aria-disabled>
            {'<<'}
          </LinkPaging>
        ) : (
          <LinkPaging className="move" onClick={() => setCurrentPage(1)}>
            {'<<'}
          </LinkPaging>
        )}
        {currentPage === 1 ? (
          <LinkPaging className="move move_disabled" aria-disabled>
            {'<'}
          </LinkPaging>
        ) : (
          <LinkPaging
            className="move"
            onClick={() => setCurrentPage(page => page - 1)}
          >
            {'<'}
          </LinkPaging>
        )}
        <GroupPaging>
          {pageList.map(
            item =>
              isViewCondition(item) && (
                <Fragment key={item}>
                  {item === currentPage ? (
                    <LinkPaging className="current" aria-disabled>
                      {item}
                    </LinkPaging>
                  ) : (
                    <LinkPaging onClick={() => setCurrentPage(item)}>
                      {item}
                    </LinkPaging>
                  )}
                </Fragment>
              ),
          )}
        </GroupPaging>
        {currentPage === pageList[pageList.length - 1] ? (
          <LinkPaging className="move move_disabled" aria-disabled>
            {'>'}
          </LinkPaging>
        ) : (
          <LinkPaging
            className="move"
            onClick={() => setCurrentPage(page => page + 1)}
          >
            {'>'}
          </LinkPaging>
        )}
        {currentPage === pageList[pageList.length - 1] ? (
          <LinkPaging className="move move_disabled" aria-disabled>
            {'>>'}
          </LinkPaging>
        ) : (
          <LinkPaging
            className="move"
            onClick={() => setCurrentPage(pageList[pageList.length - 1])}
          >
            {'>>'}
          </LinkPaging>
        )}
      </InnerPaging>
    </WrapPaging>
  );
};

export default Pagination;
