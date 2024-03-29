import React, { FunctionComponent, useEffect, useMemo, useState } from 'react';
import { graphql } from 'gatsby';
import CategoryList, { CategoryListProps } from 'components/Main/CategoryList';
import PostList from 'components/Main/PostList';
import { PostListItemType } from 'types/PostItem.types';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import queryString, { ParsedQuery } from 'query-string';
import Pagination from 'components/Main/Pagination';
import Template from 'components/Common/Template';

type IndexPageProps = {
  location: {
    search: string;
  };
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        siteUrl: string;
      };
    };
    allMarkdownRemark: {
      edges: PostListItemType[];
    };
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
      publicURL: string;
    };
  };
};

const IndexPage: FunctionComponent<IndexPageProps> = function ({
  location: { search },
  data: {
    site: {
      siteMetadata: { title, description, siteUrl },
    },
    allMarkdownRemark: { edges },
    file: {
      childImageSharp: { gatsbyImageData },
      publicURL,
    },
  },
}) {
  const [limit, setLimit] = useState<number>(12);
  const [viewList, setViewList] = useState<PostListItemType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const parsed: ParsedQuery<string> = queryString.parse(search);
  const selectedCategory: string =
    typeof parsed.category !== 'string' || !parsed.category
      ? 'All'
      : parsed.category;

  const categoryList = useMemo(
    () =>
      edges.reduce(
        (
          list: CategoryListProps['categoryList'],
          {
            node: {
              frontmatter: { categories },
            },
          }: PostListItemType,
        ) => {
          categories?.forEach(category => {
            if (list[category] === undefined) list[category] = 1;
            else list[category]++;
          });

          list['All']++;

          return list;
        },
        { All: 0 },
      ),
    [],
  );

  useEffect(() => {
    if (window === undefined) return;

    function handleResize() {
      const width = window.innerWidth;
      let newValue;

      if (width < 768) {
        newValue = 5;
      } else if (width < 1200) {
        newValue = 6;
      } else if (width < 1600) {
        newValue = 9;
      } else {
        newValue = 12;
      }
      setLimit(newValue);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (currentPage) {
      setViewList(edges.slice((currentPage - 1) * limit, currentPage * limit));
    }
  }, [edges, currentPage, limit, setViewList]);

  return (
    <Template
      gatsbyImageData={gatsbyImageData}
      title={title}
      description={description}
      url={siteUrl}
      image={publicURL}
    >
      <CategoryList
        selectedCategory={selectedCategory}
        categoryList={categoryList}
      />
      <PostList selectedCategory={selectedCategory} posts={viewList} />
      <Pagination
        limit={limit}
        perLimit={5}
        totalCnt={edges.length || 1}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Template>
  );
};

export default IndexPage;

export const getPostList = graphql`
  query getPostList {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 768, height: 400)
              }
            }
          }
        }
      }
    }
    file(name: { eq: "profile-image" }) {
      childImageSharp {
        gatsbyImageData(width: 45, height: 45)
      }
      publicURL
    }
  }
`;
