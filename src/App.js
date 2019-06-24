import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/presentational/Header';
import Main from './pages/main/Main';
import Modal from './components/presentational/Modal';

const AppContainer = styled.div`
  padding-bottom: 3rem;
`;

const App = () => (
  <Router>
    <AppContainer>
      <Modal />
      <Header />
      <Route path="/" exact component={Main} />
    </AppContainer>
  </Router>
);

export default App;
