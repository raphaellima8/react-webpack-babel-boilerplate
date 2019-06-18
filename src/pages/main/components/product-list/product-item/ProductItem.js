import React from 'react';
import './ProductItem.scss';
import Gallery from './gallery/Gallery';
import Description from './description/Description';

const ProductItem = props => {
  const { productItem } = props;
  return (
    <section className="product-container">
      <Gallery imageList={productItem.images} />
      <Description data={productItem} />
    </section>
  );
};

export default ProductItem;
