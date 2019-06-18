import React from 'react';
import SectionHeader from './components/presentational/SectionHeader';
import SearchResult from './components/presentational/SearchResult';
import SearchFooter from './components/presentational/SearchFooter';

const Main = () => (
  <main>
    <SectionHeader title="OI" />
    <SearchResult />
    <SearchFooter />
  </main>
);

export default Main;
