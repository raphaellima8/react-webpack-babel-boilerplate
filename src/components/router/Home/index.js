import React from 'react';
import Modal from '../../presentational/Modal';
import Header from '../../presentational/Header';
import SearchResult from '../../presentational/SearchResult';
import SearchFooter from '../../presentational/SearchFooter';
import SectionHeader from '../../presentational/SectionHeader';

const HomePage = () => (
  <div>
    <Modal />
    <Header />
    <main>
      <SectionHeader />
      <SearchResult />
      <SearchFooter />
    </main>
  </div>
);

export default HomePage;
