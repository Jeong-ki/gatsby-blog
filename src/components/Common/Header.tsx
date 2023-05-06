import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import LogoImage from 'components/Common/LogoImage';
import { Link } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { useLocation } from '@gatsbyjs/reach-router';
import { css } from '@emotion/react';

import type { SerializedStyles } from '@emotion/serialize';

declare module 'react' {
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    css?: SerializedStyles;
  }
}

type IntroductionProps = {
  profileImage: IGatsbyImageData;
};

const WrapHeader = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  padding: 20px 50px;
  border-bottom: 1px solid #eaecef;

  @media (max-width: 1600px) {
    padding: 20px 50px;
  }

  @media (max-width: 1200px) {
    padding: 20px;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;
const WrapLogo = styled(Link)`
  display: flex;
  font-size: 23px;
  font-weight: 500;
  align-items: center;
`;
const Title = styled.h1`
  margin-left: 8px;
  font-size: 21px;
  font-weight: 400;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
`;
const Item = styled(Link)`
  margin-right: 35px;
  padding-bottom: 3px;
`;

const Header: FunctionComponent<IntroductionProps> = function ({
  profileImage,
}) {
  const { pathname } = useLocation();

  const postUnderLine = css`
    border-bottom: 2px solid ${pathname === '/' ? '#A07577' : '#fff'};
  `;
  const aboutUnderLine = css`
    border-bottom: 2px solid ${pathname === '/about/' ? '#A07577' : '#fff'};
  `;

  return (
    <WrapHeader>
      <WrapLogo to="/">
        <LogoImage profileImage={profileImage} />
        <Title>DevDog</Title>
      </WrapLogo>
      <Menu>
        <Item css={postUnderLine} to="/">
          Post
        </Item>
        <Item css={aboutUnderLine} to="/about">
          About
        </Item>
      </Menu>
    </WrapHeader>
  );
};

export default Header;
