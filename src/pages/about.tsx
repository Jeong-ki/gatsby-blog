import React, { FunctionComponent } from 'react';
import { Link, graphql } from 'gatsby';
import Template from 'components/Common/Template';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import styled from '@emotion/styled';

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
`;

const Title = styled.h2`
  display: block;
  margin-bottom: 45px;
  font-size: 36px;
`;
const SubTitle = styled.h3`
  font-size: 26px;
  margin-bottom: 20px;
  padding-left: 10px;
  border-left: 5px solid black;
`;
const InfoBox = styled.div`
  margin-bottom: 40px;
  & p {
    margin-bottom: 12px;
  }
`;
const LinkWrapper = styled.div`
  display: flex;
`;
const GitHubLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #000;
  color: #fff;
  padding: 5px 10px;
  margin-top: 20px;
  margin-right: 8px;
  width: 141px;
  font-weight: bold;
  border-radius: 5px;
  &:hover {
    color: #fff;
  }
`;
const EmailLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  color: #000;
  padding: 5px 10px;
  margin-top: 20px;
  width: 133px;
  font-weight: bold;
  border: 1px solid #000;
  border-radius: 5px;
`;

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
      <AboutWrapper>
        <Title>About</Title>
        <InfoBox>
          <SubTitle>Experience</SubTitle>
          <p>- 디케이테크인 프론트엔드 개발자 (2022. 05 ~ )</p>
          <p>
            - 멋쟁이 사자처럼 프론트엔드 스쿨 1기 수료 (2021. 10 ~ 2022. 01)
          </p>
          <p>- 강릉원주대학교 멀티미디어공학과 졸업 (2016. 03 ~ 2022. 02)</p>
        </InfoBox>
        <InfoBox>
          <SubTitle>Blog Tech Stack</SubTitle>
          <p>- TypeScript</p>
          <p>- Gatsby</p>
          <p>- GraphQL</p>
          <p>- Emotion</p>
        </InfoBox>
        <LinkWrapper>
          <GitHubLink to="https://github.com/Jeong-ki">
            <svg
              viewBox="0 0 24 24"
              width="25"
              height="25"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="none"
              shape-rendering="geometricPrecision"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"></path>
            </svg>
            Visit GitHub
          </GitHubLink>
          <EmailLink to="mailto:gisuu9@gmail.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="c-hKrDJn"
            >
              <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"></path>
            </svg>
            Send Email
          </EmailLink>
        </LinkWrapper>
      </AboutWrapper>
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
