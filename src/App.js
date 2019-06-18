import React from 'react';
import styled from 'styled-components';
import Header from './components/presentational/Header';

const AppContainer = styled.div`
  padding-bottom: 3rem;
`;

const App = () => (
  <AppContainer>
    <Header />
  </AppContainer>
);

export default App;
