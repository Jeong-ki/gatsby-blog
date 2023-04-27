import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import LogoImage from 'components/Common/LogoImage';
import { Link } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';

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
`;

const Header: FunctionComponent<IntroductionProps> = function ({
  profileImage,
}) {
  return (
    <WrapHeader>
      <WrapLogo to="/">
        <LogoImage profileImage={profileImage} />
        <Title>DevDog</Title>
      </WrapLogo>
      <Menu>
        <Item to="/">Post</Item>
        <Item to="/about">About</Item> {/* MEMO: 소개 페이지 추가 예정 */}
      </Menu>
    </WrapHeader>
  );
};

export default Header;
