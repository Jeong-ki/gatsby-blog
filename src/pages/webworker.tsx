import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import Template from 'components/Common/Template';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import styled from '@emotion/styled';
import WorkerComponent from 'components/WebWorker/WorkerComponent';

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

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
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

  & div {
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 500px;
    display: inline-block;
  }

  & input[type="number"] {
    width: 130px;
    padding: 8px;
    margin: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 14px;
  }

  & button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 15px;
    margin: 10px 5px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
  }

  & button:hover {
    background-color: #45a049;
  }

  & p {
    margin-top: 10px;
    font-size: 18px;
    font-weight: bold;
    padding: 8px;
    margin: 0 5px;
  }
`;

const Title = styled.h2`
  display: block;
  margin-bottom: 45px;
  font-size: 32px;
`;

const WebWorkerPage: FunctionComponent<AboutPageProps> = function ({
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
      <AboutWrapper>
        <Title>WebWorker Calculater</Title>
        <WorkerComponent />
      </AboutWrapper>
    </Template>
  );
};

export default WebWorkerPage;

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
