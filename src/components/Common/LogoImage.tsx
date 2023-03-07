import React, { FunctionComponent } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const LogoImage: FunctionComponent = function () {
  return (
    <StaticImage
      src="../../images/logo.jpeg"
      alt="logo image"
      width={45}
      height={45}
      // style={{ borderRadius: '50%', border: '1px solid black' }}
    />
  );
};

export default LogoImage;
