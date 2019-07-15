import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';
import InputMask from 'react-input-mask';

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

const ZipCodeFieldContainer = styled.div`
  width: 100%;
  display: flex;
  input {
    width: 80%;
    border: none;
    outline: none;
    color: gray;
  }
  i {
    margin: 1rem;
  }
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

export const ZipCodeField = ({
  fieldValue,
  onChangeCb,
  placeholder,
  onBlurCb
}) => (
  <ZipCodeFieldContainer>
    <i className="fa fa-truck" aria-hidden="true" />
    <InputMask
      mask="99999-999"
      maskChar={null}
      value={fieldValue}
      onChange={onChangeCb}
      placeholder={placeholder}
      type="search"
      onBlur={onBlurCb}
    />
  </ZipCodeFieldContainer>
);

export default Input;
