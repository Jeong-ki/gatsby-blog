import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import GlobalStyle from 'components/Common/GlobalStyle';
import Header from 'components/Common/Header';

const Container = styled.div`
  display: flex;
  flex-direction: colum;
  height: 100%;
`;

const IndexPage: FunctionComponent = function () {
  return (
    <Container>
      <GlobalStyle />
      <Header />
    </Container>
  );
};

export default IndexPage;
