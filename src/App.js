import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';

import Login from './components/router/Login';
import HomePage from './components/router/Home';
import Product from './components/router/Product';

const AppContainer = styled.div`
  padding-bottom: 3rem;
`;

const App = () => (
  <Router>
    <AppContainer>
      <Route path="/" exact component={HomePage} />
      <Route path="/login" component={Login} />
      <Route path="/product/detail" component={Product} />
    </AppContainer>
  </Router>
);

export default App;
