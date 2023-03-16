import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import LogoImage from 'components/Common/LogoImage';
import { Link } from 'gatsby';

const WrapHeader = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid #eaecef;
`;
const WrapLogo = styled(Link)`
  display: flex;
  font-size: 23px;
  font-weight: 500;
  align-items: center;
`;
const Title = styled.div`
  margin-left: 8px;
  font-size: 21px;
  font-weight: 400;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
`;

const Header: FunctionComponent = function () {
  return (
    <WrapHeader>
      <WrapLogo to="/">
        <LogoImage />
        <Title>DevDog</Title>
      </WrapLogo>
      <Menu>Post About 검색</Menu>
    </WrapHeader>
  );
};

export default Header;
