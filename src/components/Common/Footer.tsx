import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const FooterWrapper = styled.div`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 20px 0;
  font-size: 13px;
  text-align: center;
  line-height: 1.5;
  border-top: 1px solid #eaecef;
`;
const MyInfo = styled.p`
  color: #848484;
  margin-top: 10px;
`;

const Footer: FunctionComponent = function () {
  return (
    <FooterWrapper>
      Copyright © 2023 Developer Jeong-Ki
      <MyInfo>
        gisuu9@gmail.com . +82-10-2926-3532 .{' '}
        <Link to="https://github.com/Jeong-ki">Github</Link>
      </MyInfo>
    </FooterWrapper>
  );
};

export default Footer;
