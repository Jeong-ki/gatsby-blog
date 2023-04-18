import styled from '@emotion/styled';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { FunctionComponent, ReactNode } from 'react';
import Footer from './Footer';
import GlobalStyle from './GlobalStyle';
import Header from './Header';

type TemplateProps = {
  children: ReactNode;
  gatsbyImageData: IGatsbyImageData;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Template: FunctionComponent<TemplateProps> = function ({
  children,
  gatsbyImageData,
}) {
  return (
    <Container>
      <GlobalStyle />
      <Header profileImage={gatsbyImageData} />
      {children}
      <Footer />
    </Container>
  );
};

export default Template;
