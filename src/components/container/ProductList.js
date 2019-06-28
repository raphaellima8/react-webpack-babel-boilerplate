import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductItem from '../presentational/ProductItem';

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

const mapStateToProps = state => {
  return {
    products: state.productsPage.products
  };
};

export default connect(mapStateToProps)(ProductList);
