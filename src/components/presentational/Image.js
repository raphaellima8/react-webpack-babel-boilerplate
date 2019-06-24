import React from 'react';
import styled, { css } from 'styled-components';

const StyledImage = styled.img`
  ${({ fullSize }) => {
    return fullSize
      ? css`
          width: 100%;
          height: 100%;
        `
      : css`
          width: 4rem;
          height: 4rem;

          @media (min-width: 600px) {
            width: 5rem;
            height: 5rem;
            margin-right: 1rem;
          }
        `;
  }}
`;

const Image = ({ imgAddress, fullSize, clickCb }) => {
  return (
    <StyledImage
      alt="img"
      src={imgAddress}
      fullSize={fullSize}
      onClick={() => {
        if (!(typeof clickCb === 'function')) {
          return;
        }
        clickCb(imgAddress);
      }}
    />
  );
};

export default Image;
