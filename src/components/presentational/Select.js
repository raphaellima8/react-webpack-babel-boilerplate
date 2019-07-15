/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';

const SelectElem = styled.select`
  width: 100%;
  border-radius: 0.3rem;
  padding: 0.5rem;
  font-size: 1rem;
  outline: none;
`;

const Label = styled.label`
  display: inline-block;
  margin-bottom: 1.1rem;
  font-weight: bold;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const getOptions = () => {
  let opts = [];
  for (let i = 1; i < 11; i++) {
    opts = [
      ...opts,
      <option value={i} key={i}>
        {i}
      </option>
    ];
  }
  return opts;
};

const Select = ({ labelText, onChangeCb, children, className }) => (
  <Container className={className}>
    <Label>{labelText}</Label>
    <SelectElem onChange={onChangeCb}>{children || getOptions()}</SelectElem>
  </Container>
);

export default Select;
