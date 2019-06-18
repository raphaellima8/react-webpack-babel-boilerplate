import React from 'react';
import styled, { css } from 'styled-components';

const StyledInput = styled.input.attrs(({ type }) => type)`
  ${({ removeDefaultStyle }) =>
    removeDefaultStyle
      ? css`
          width: 100%;
          border: 0;
          padding: 0.5rem 0.5rem 0.5rem 0;
          outline: none;
        `
      : css``};
`;

const Input = ({
  type,
  placeholder,
  term,
  onInputChange,
  removeDefaultStyle
}) => (
  <StyledInput
    type={type}
    value={term}
    onChange={onInputChange}
    placeholder={placeholder}
    removeDefaultStyle={removeDefaultStyle}
  />
);

export default Input;
