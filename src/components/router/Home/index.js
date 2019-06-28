import React from 'react';

import PageContainer from '../../container/PageContainer';
import SearchResult from '../../presentational/SearchResult';
import SearchFooter from '../../presentational/SearchFooter';
import SectionHeader from '../../presentational/SectionHeader';

const HomePage = () => (
  <PageContainer>
    <SectionHeader />
    <SearchResult />
    <SearchFooter />
  </PageContainer>
);

export default HomePage;
