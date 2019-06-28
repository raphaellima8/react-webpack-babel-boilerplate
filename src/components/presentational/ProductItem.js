import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import Description from './Description';
import Gallery from '../container/Gallery';

const ProductItemContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  border: 0.05rem solid lightgrey;
  padding: 0.5rem;
  a {
    width: 100%;
    color: black;
    text-decoration: none;
    :hover {
      color: lightgray;
      text-decoration: underline;
    }
  }
  @media screen and (min-width: 600px) {
    a {
      width: 60%;
    }
  }
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
      <Link to="/product/detail" onClick={e => console.log(e.target)}>
        <Description data={productItem} />
      </Link>
    </ExtendedProductItemContainer>
  );
};

export default ProductItem;
