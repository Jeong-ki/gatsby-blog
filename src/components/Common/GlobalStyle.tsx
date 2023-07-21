import React, { FunctionComponent } from 'react';
import { Global, css } from '@emotion/react';

const defaultStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Nanum Myeongjo', serif;
  }

  html,
  body,
  #___gatsby {
    height: 100%;
  }
  #gatsby-focus-wrapper {
    height: 100%;
  }
  a,
  a:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
  .img_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .md_img {
    width: 300px;
    height: 300px;
  }
  .loop_img {
    width: 500px;
    margin: 20px 0;
  }
`;

const GlobalStyle: FunctionComponent = function () {
  return <Global styles={defaultStyle} />;
};

export default GlobalStyle;
