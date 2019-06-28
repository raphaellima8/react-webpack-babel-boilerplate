import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Line from './Line';
import Paragraph from './Paragraph';
import ProductList from '../container/ProductList';

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
        <CustomText text={text.replace('{amount}', amountDocs).toUpperCase()} />
      </AmountItems>
      <ProductList />
      <Line />
    </SearchResultContainer>
  );
};

const mapStateToProps = ({ productsPage }) => {
  return {
    amountDocs: productsPage.amountDocs,
    text: '{amount} produtos encontrados'
  };
};

export default connect(mapStateToProps)(SearchResult);
