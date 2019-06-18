import React, { Component } from 'react';
import styled from 'styled-components';
import Paragraph from '../../../../../../../components/presentational/Paragraph';

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
    return (
      <DescriptionContainer>
        <ProductDescriptionContainer>
          <HeadText>TESTE</HeadText>
          <CustomParagraph text="CATEGORIA TYPE" />
        </ProductDescriptionContainer>
        <ProductPriceContainer>
          <ProductPrice text="R$ 300,00" />
          <CustomParagraph text="por" />
          {this.renderPromotionalPrice(200)}
        </ProductPriceContainer>
      </DescriptionContainer>
    );
  }
}

export default Description;
