import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductItem from './product-item/ProductItem';

const mapStateToProps = state => {
  return {
    products: state.productsPage.products
  };
};

class ProductList extends Component {
  parseList() {
    const { products } = this.props;
    return (products || []).map(product => {
      return <ProductItem key={product.productId} productItem={product} />;
    });
  }

  render() {
    return <div>{this.parseList()}</div>;
  }
}

export default connect(mapStateToProps)(ProductList);
