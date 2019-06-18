import React from 'react';
import styled from 'styled-components';

import SelectItemsPerPage from '../SelectItemsPerPage';
import Paginator from '../Paginator';

const SearchFooterContainer = styled.section`
  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
  }
  margin: 20px auto 0 auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
  align-items: center;
`;

const SearchFooter = () => (
  <SearchFooterContainer>
    <SelectItemsPerPage />
    <Paginator />
  </SearchFooterContainer>
);

export default SearchFooter;
