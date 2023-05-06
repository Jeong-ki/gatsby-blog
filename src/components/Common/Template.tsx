import styled from '@emotion/styled';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { FunctionComponent, ReactNode } from 'react';
import Footer from './Footer';
import GlobalStyle from './GlobalStyle';
import Header from './Header';
import { Helmet } from 'react-helmet';

type TemplateProps = {
  title: string;
  description: string;
  url: string;
  image: string;
  children: ReactNode;
  gatsbyImageData: IGatsbyImageData;
};

const Container = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Template: FunctionComponent<TemplateProps> = function ({
  title,
  description,
  url,
  image,
  children,
  gatsbyImageData,
}) {
  return (
    <Container>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={title} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:site" content="Jeong-Ki" />
        <meta name="twitter:creator" content="Jeong-Ki" />

        <meta
          name="google-site-verification"
          content="S7jPrYeCQFqTTA3JEsStCSo1ztA3wO6slosi2VSy3gQ"
        />
        <meta
          name="naver-site-verification"
          content="960a03e3d484ddced5ba2d9cb7c935d615735746"
        />

        <html lang="ko" />
      </Helmet>
      <GlobalStyle />
      <Header profileImage={gatsbyImageData} />
      {children}
      <Footer />
    </Container>
  );
};

export default Template;
