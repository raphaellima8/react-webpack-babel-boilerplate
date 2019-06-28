import React, { Component } from 'react';
import styled from 'styled-components';

import Paragraph from './Paragraph';

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
    align-items: center;
  }
`;

const ProductDescriptionContainer = styled.div`
  p {
    color: gray;
  }
`;

const ProductPriceContainer = styled.div`
  > p {
    display: inline-block;
    margin-right: 0.4rem;
    color: grey;
  }
`;

const ProductPrice = styled(Paragraph)`
  text-decoration-line: line-through;
`;

const PromotionalProductPrice = styled(Paragraph)`
  && {
    color: black;
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

class Description extends Component {
  setMoneyMask(value) {
    const parsedValue = Number(value);
    const v = !Number.isNaN(parsedValue) ? parsedValue : 0;
    return v.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  }

  renderPromotionalPrice(value) {
    return <PromotionalProductPrice text={this.setMoneyMask(value)} />;
  }

  render() {
    const { category, type, name, price, promotionalPrice } = this.props.data;
    return (
      <DescriptionContainer>
        <ProductDescriptionContainer>
          <HeadText>{name}</HeadText>
          <CustomParagraph text={`${category} ${type}`} />
        </ProductDescriptionContainer>
        <ProductPriceContainer>
          <ProductPrice text={this.setMoneyMask(price)} />
          <CustomParagraph text="por" />
          {this.renderPromotionalPrice(promotionalPrice)}
        </ProductPriceContainer>
      </DescriptionContainer>
    );
  }
}

export default Description;
