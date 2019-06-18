import React from 'react';
import styled from 'styled-components';
import Header from './components/presentational/Header';
import Main from './pages/main/Main';

const AppContainer = styled.div`
  padding-bottom: 3rem;
`;

const App = () => (
  <AppContainer>
    <Header />
    <Main />
  </AppContainer>
);

export default App;
