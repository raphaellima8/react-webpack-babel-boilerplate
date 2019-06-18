import React from 'react';
import styled from 'styled-components';

const StyledLine = styled.hr`
  border-top: 1px solid lightgrey;
  margin-top: 1rem;
  margin-bottom: 1rem;
  @media (min-width: 600px) {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

const Line = () => <StyledLine />;

export default Line;
