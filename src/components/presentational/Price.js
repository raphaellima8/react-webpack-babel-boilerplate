import React from 'react';
import styled from 'styled-components';
import Paragraph from './Paragraph';

const PriceComponent = styled(Paragraph)`
  text-decoration-line: ${({ isPromotional }) =>
    isPromotional ? 'line-through' : 'none'};
  margin-top: 0;
  color: gray;
`;

const PromotionalPriceComponent = styled(Paragraph)`
  && {
    margin-top: 0;
    color: black;
  }
`;

const setMoneyMask = value => {
  const parsedValue = Number(value);
  const v = !Number.isNaN(parsedValue) ? parsedValue : 0;
  return v.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
};

const Price = ({ text, isPromotional }) => (
  <PriceComponent isPromotional={isPromotional} text={setMoneyMask(text)} />
);

export const PromotionalPrice = ({ text }) => (
  <PromotionalPriceComponent text={setMoneyMask(text)} />
);

export default Price;
