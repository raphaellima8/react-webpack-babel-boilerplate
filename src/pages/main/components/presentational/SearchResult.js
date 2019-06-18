import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Paragraph from '../../../../components/presentational/Paragraph';
import Line from '../../../../components/presentational/Line';
import ProductList from '../container/product-list/ProductList';

const SearchResultContainer = styled.div`
  margin: 20px auto 0 auto;
  width: 80%;
`;

const AmountItems = styled.div`
  display: flex;
`;

const CustomText = styled(Paragraph)`
  text-align: left;
  padding-bottom: 0.5rem;
  border-bottom: 0.05rem solid gold;
`;

const SearchResult = ({ text, amountDocs }) => {
  return (
    <SearchResultContainer>
      <AmountItems>
        <CustomText
          text={'{amount} produtos encontrados'
            .replace('{amount}', amountDocs)
            .toUpperCase()}
        />
      </AmountItems>
      <ProductList />
      <Line />
    </SearchResultContainer>
  );
};

const mapStateToProps = state => {
  return {
    amountDocs: state.productsPage.amountDocs,
    text: '{amount} produtos encontrados'
  };
};

export default connect(mapStateToProps)(SearchResult);
