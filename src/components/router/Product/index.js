import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Select from '../../presentational/Select';
import Button from '../../presentational/Button';
import Paragraph from '../../presentational/Paragraph';
import { ThirdTitle } from '../../presentational/Title';
import PageContainer from '../../container/PageContainer';
import BoxWithText from '../../presentational/BoxWithText';
import Price, { PromotionalPrice } from '../../presentational/Price';
import {
  fetchProduct,
  updateProductPrices,
  fetchDeadline
} from '../../../actions';
import { ZipCodeField } from '../../presentational/Input';

const mapStateToProps = ({ product, deadline }) => ({ product, deadline });

const mapDispatchToProps = dispatch => ({
  fetchProductDetail: productId => dispatch(fetchProduct(productId)),
  updateProduct: (product, price, promoPrice) =>
    dispatch(updateProductPrices(product, price, promoPrice)),
  fetchDeadline: zipCode => dispatch(fetchDeadline(zipCode))
});

const SectionContainer = styled.section`
  display: flex;
  width: 57%;
  justify-content: space-between;
  button {
    margin: 15px 0;
  }
`;

const MainPictureContainer = styled.div`
  width: 500px;
  height: 400px;
  display: flex;
  span,
  img {
    width: inherit;
  }
`;

const ThumbList = styled(MainPictureContainer)`
  width: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  span {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    &:hover::before {
      height: 74px;
    }
    ::before {
      content: '';
      background-color: #ffc709;
      width: 10px;
      height: 0;
      position: absolute;
      z-index: 1;
      transition: height 0.3s ease-in-out;
    }
    img {
      height: 74px;
      width: 100px;
      margin-left: 15px;
    }
  }
`;

const ProductDetail = styled(SectionContainer)`
  width: 85%;
  padding: 4rem 6rem;
  section:not(:first-child) {
    width: 32%;
    margin-right: 10px;
    flex-direction: column;
    justify-content: start;
  }
`;

const PriceContainer = styled.div`
  width: 60%;
  p {
    margin-bottom: 0;
    font-size: 20px;
    &:not(:first-child) {
      font-size: 40px;
    }
  }
`;

const PriceWithAmountContainer = styled(PriceContainer)`
  width: 100%;
  display: flex;
`;

const SelectContainer = styled(Select)`
  width: 25%;
`;

const DeliveryComponent = styled.div`
  width: 85%;
  border: 1px solid gray;
  border-radius: 6px;
  p {
    text-align: center;
  }
`;

class Product extends Component {
  productId;

  constructor({ location }) {
    super();
    if (location.search) {
      const splitedSearch = location.search.split('=');
      this.state = {
        productId: splitedSearch.pop(),
        cep: ''
      };
    }
  }

  componentDidMount() {
    this.props.fetchProductDetail(this.state.productId);
  }

  optionSelected = ({ target }) => {
    const { value } = target;
    const { product } = this.props;
    const promoPrice = value * product.promotionalPrice;
    const price = value * product.price;
    this.props.updateProduct(product, price, promoPrice);
  };

  searchCEP = ({ target }) => {
    this.setState({ cep: target.value });
  };

  onBlur = ({ target }) => {
    const { value } = target;
    if (value.length === 9) {
      this.props.fetchDeadline(value);
    }
  };

  renderContrastImg() {
    const { images } = this.props.product;
    if (Array.isArray(images) && images.length > 0) {
      return <img src={images[0].src} alt="" />;
    }
    return null;
  }

  renderImageList() {
    return this.props.product.images.map(image => (
      <span>
        <img src={image.src} key={image.id} alt="" />
      </span>
    ));
  }

  render() {
    const {
      name,
      category,
      type,
      price,
      promotionalPrice,
      newPrice,
      newPromotionalPrice
    } = this.props.product;
    return (
      <PageContainer>
        <BoxWithText text={name} />
        <ProductDetail>
          <SectionContainer>
            <MainPictureContainer>
              {this.renderContrastImg()}
            </MainPictureContainer>
            <ThumbList>{this.renderImageList()}</ThumbList>
          </SectionContainer>
          <SectionContainer>
            <ThirdTitle bold={Boolean(true)} text={name} />
            <Paragraph text={`${category} - ${type}`} />
            <PriceWithAmountContainer>
              <PriceContainer>
                <Price text={newPrice || price} isPromotional={true} />
                <PromotionalPrice
                  text={newPromotionalPrice || promotionalPrice}
                />
              </PriceContainer>
              <SelectContainer
                onChangeCb={this.optionSelected}
                labelText="Quantidade"
              />
            </PriceWithAmountContainer>
            <Button btnLabel="Adicionar ao carrinho" />
            <DeliveryComponent>
              <ZipCodeField
                fieldValue={this.state.cep}
                onChangeCb={this.searchCEP}
                placeholder="Consulte o prazo de entrega"
                onBlurCb={this.onBlur}
              />
              {this.props.deadline > 0 ? (
                <p>Entrega em até {this.props.deadline} dias úteis</p>
              ) : null}
            </DeliveryComponent>
          </SectionContainer>
        </ProductDetail>
      </PageContainer>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);
