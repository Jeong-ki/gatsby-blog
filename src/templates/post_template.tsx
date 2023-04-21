import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import Template from 'components/Common/Template';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import PostContent from 'components/Post/PostContent';
import PostHead from 'components/Post/PostHead';
import { PostFrontmatterType } from 'types/PostItem.types';
import CommentWidget from 'components/Post/CommentWidget';

type PostTemplateProps = {
  data: {
    allMarkdownRemark: {
      edges: PostPageItemType[]; // 존재하지 않는 타입이므로 에러가 발생하지만 일단 작성해주세요
    };
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
  };
};
export type PostPageItemType = {
  node: {
    html: string;
    frontmatter: PostFrontmatterType;
  };
};

const PostTemplate: FunctionComponent<PostTemplateProps> = function ({
  data: {
    allMarkdownRemark: { edges },
    file: {
      childImageSharp: { gatsbyImageData },
    },
  },
}) {
  console.log(edges[0]);

  const {
    node: { html, frontmatter },
  } = edges[0];

  return (
    <Template gatsbyImageData={gatsbyImageData}>
      <PostHead {...frontmatter} />
      <PostContent html={html} />
      <CommentWidget />
    </Template>
  );
};

export default PostTemplate;

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            summary
            date(formatString: "YYYY년 MM월 DD일")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData
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
    }
  }
`;
