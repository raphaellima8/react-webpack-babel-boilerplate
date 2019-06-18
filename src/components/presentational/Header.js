import React from 'react';
import styled from 'styled-components';

import Title from './Title';
import Search from '../container/Search';

const HeaderContainer = styled.header`
  margin: 0.3rem;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  align-items: center;
`;
const Header = () => (
  <HeaderContainer>
    <Title text="mmartan" />
    <Search />
  </HeaderContainer>
);

export default Header;
