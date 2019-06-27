import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';

import Main from './pages/main/Main';
import Login from './components/router/Login';

const AppContainer = styled.div`
  padding-bottom: 3rem;
`;

const App = () => (
  <Router>
    <AppContainer>
      <Route path="/" exact component={Main} />
      <Route path="/login" component={Login} />
    </AppContainer>
  </Router>
);

export default App;
