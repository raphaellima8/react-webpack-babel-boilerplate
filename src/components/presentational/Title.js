import React from 'react';
import styled from 'styled-components';

const HeaderTitle = styled.h1`
  margin: 0;
  font-size: 1rem;

  @media (min-width: 600px) {
    font-size: 2rem;
  }
`;

const Title = ({ text }) => <HeaderTitle>{text}</HeaderTitle>;

export default Title;
