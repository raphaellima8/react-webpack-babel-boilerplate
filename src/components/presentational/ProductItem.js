import React from 'react';
import styled from 'styled-components';

import Description from './Description';
import Gallery from '../container/Gallery';

const ProductItemContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  border: 0.05rem solid lightgrey;
  padding: 0.5rem;
`;

const ExtendedProductItemContainer = styled(ProductItemContainer)`
  ~ section {
    border-top: none;
  }
`;

const ProductItem = ({ productItem }) => {
  return (
    <ExtendedProductItemContainer>
      <Gallery imageList={productItem.images} />
      <Description data={productItem} />
    </ExtendedProductItemContainer>
  );
};

export default ProductItem;
