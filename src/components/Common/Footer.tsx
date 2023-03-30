import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

const FooterWrapper = styled.div`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 50px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 13px;
  }
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
        <a href="https://github.com/Jeong-ki">Jeong-ki's Github</a>
      </MyInfo>
    </FooterWrapper>
  );
};

export default Footer;
