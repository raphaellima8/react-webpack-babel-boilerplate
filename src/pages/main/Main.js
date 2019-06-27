import React from 'react';
import SectionHeader from './components/presentational/SectionHeader';
import SearchResult from './components/presentational/SearchResult';
import SearchFooter from './components/presentational/SearchFooter';
import Modal from '../../components/presentational/Modal';
import Header from '../../components/presentational/Header';

const Main = () => (
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

export default Main;
