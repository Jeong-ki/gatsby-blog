import React, { FunctionComponent } from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import styled from '@emotion/styled';

type ProfileImageProps = {
  profileImage: IGatsbyImageData;
};

const ProfileImageWrapper = styled(GatsbyImage)`
  width: 45px;
  height: 45px;
  /* margin-bottom: 30px;
  border-radius: 50%; */
`;

const LogoImage: FunctionComponent<ProfileImageProps> = function ({
  profileImage,
}) {
  return (
    <ProfileImageWrapper
      image={profileImage}
      alt="Logo Image"
      // style={{ borderRadius: '50%', border: '1px solid black' }}
    />
  );
};

export default LogoImage;
