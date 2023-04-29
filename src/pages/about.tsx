import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import Template from 'components/Common/Template';
import { IGatsbyImageData } from 'gatsby-plugin-image';

type AboutPageProps = {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        siteUrl: string;
      };
    };
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
      publicURL: string;
    };
  };
};
const AboutPage: FunctionComponent<AboutPageProps> = function ({
  data: {
    site: {
      siteMetadata: { title, description, siteUrl },
    },
    file: {
      childImageSharp: { gatsbyImageData },
      publicURL,
    },
  },
}) {
  return (
    <Template
      gatsbyImageData={gatsbyImageData}
      title={title}
      description={description}
      url={siteUrl}
      image={publicURL}
    >
      <div>
        <h1>About me</h1>
        <p>I'm a web developer who loves gatsby.</p>
      </div>
    </Template>
  );
};

export default AboutPage;

export const getTemplateList = graphql`
  query getTemplateList {
    site {
      siteMetadata {
        title
        description
        siteUrl
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
