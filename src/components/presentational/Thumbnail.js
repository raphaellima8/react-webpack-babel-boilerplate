import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 4rem;
  height: 4rem;

  @media (min-width: 600px) {
    width: 5rem;
    height: 5rem;
    margin-right: 1rem;
  }
`;

const Thumbnail = ({ imgAddress }) => <Image alt="img" src={imgAddress} />;

export default Thumbnail;
