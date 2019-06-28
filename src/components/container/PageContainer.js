import React from 'react';

import Modal from '../presentational/Modal';
import Header from '../presentational/Header';

const PageContainer = ({ children }) => (
  <div>
    <Modal />
    <Header />
    <main>{children}</main>
  </div>
);

export default PageContainer;
