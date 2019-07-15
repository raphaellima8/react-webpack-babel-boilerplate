import React from 'react';
import styled from 'styled-components';

const PrimaryButton = styled.button`
  font-size: 1rem;
  width: 85%;
  height: 3.5rem;
  border-radius: 8px;
  cursor: pointer;
  color: white;
  background-color: #433e66;
  border-width: 1px;
`;

const Button = ({ btnLabel }) => (
  <PrimaryButton type="button">{btnLabel}</PrimaryButton>
);

export default Button;
