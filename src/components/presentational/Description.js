import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Paragraph from './Paragraph';
import { selectedProduct } from '../../actions';
import Price, { PromotionalPrice } from './Price';

const DescriptionContainer = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  @media (min-width: 600px) {
    width: 60%;
    padding-left: 1rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
  a {
    color: black;
    text-decoration: none;
    :hover {
      color: lightgray;
      text-decoration: underline;
    }
  }
`;

const ProductDescriptionContainer = styled.div`
  display: inline-block;
  p {
    color: gray;
  }
`;

const ProductPriceContainer = styled.div`
  display: flex;
  align-items: flex-end;
  > p {
    display: inline-block;
    margin-right: 0.4rem;
    margin-bottom: 0;
    color: grey;
  }
`;

const HeadText = styled.h3`
  text-align: left;
  margin: 0;
`;

const CustomParagraph = styled(Paragraph)`
  text-align: left;
  margin: 0;
`;

const Description = ({ data, dispatchFn }) => {
  const { category, type, name, price, promotionalPrice, productId } = data;
  return (
    <DescriptionContainer>
      <Link
        to={{
          pathname: `/product/detail`,
          search: `?productId=${productId}`
        }}
        onClick={() => dispatchFn(selectedProduct(data))}
      >
        <ProductDescriptionContainer>
          <HeadText>{name}</HeadText>
          <CustomParagraph text={`${category} ${type}`} />
        </ProductDescriptionContainer>
      </Link>
      <ProductPriceContainer>
        <Price isPromotional={true} text={price} />
        <CustomParagraph text="por" />
        <PromotionalPrice text={promotionalPrice} />
      </ProductPriceContainer>
    </DescriptionContainer>
  );
};

export default Description;
