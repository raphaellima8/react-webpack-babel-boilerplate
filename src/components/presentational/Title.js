import React from 'react';
import styled from 'styled-components';

const PrimaryHeader = styled.h1`
  margin: 0;
  font-size: 1rem;

  @media (min-width: 600px) {
    font-size: 2rem;
  }
`;

const SecondaryHeader = styled.h2`
  margin: 1rem;
  font-size: 1.8rem;
  font-weight: 300;

  @media (min-width: 600px) {
    font-size: 3rem;
  }
`;

const ThirdHeader = styled.h3`
  margin: 0;
  font-size: 1.4rem;
  font-weight: ${({ strong }) => (strong ? 'bold' : 300)};

  @media (min-width: 600px) {
    font-size: 1.5rem;
  }
`;

const PrimaryTitle = ({ text }) => <PrimaryHeader>{text}</PrimaryHeader>;
export const SecondaryTitle = ({ text }) => (
  <SecondaryHeader>{text}</SecondaryHeader>
);
export const ThirdTitle = ({ text, bold }) => (
  <ThirdHeader strong={bold}>{text}</ThirdHeader>
);

export default PrimaryTitle;
