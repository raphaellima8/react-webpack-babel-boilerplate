import React, { Component } from 'react';

import ProductItem from './product-item/ProductItem';

class ProductList extends Component {
  parseList() {
    const { products } = this.props;
    return (products || []).map(product => {
      return <ProductItem key={product.productId} productItem={product} />;
    });
  }

  render() {
    return (
      <div>
        <ProductItem>OI</ProductItem>
        <ProductItem>OI</ProductItem>
      </div>
    );
    // return <div>{this.parseList()}</div>;
  }
}

export default ProductList;
