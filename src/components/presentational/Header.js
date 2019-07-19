import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Title from './Title';
import Search from '../container/Search';

const HeaderContainer = styled.header`
  margin: 0.3rem;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  align-items: center;
  a {
    text-decoration: none;
    &:visited {
      color: black;
    }
  }
`;

const Header = () => (
  <HeaderContainer>
    <Link
      to={{
        pathname: `/`
      }}
    >
      <Title text="mmartan" />
    </Link>
    <Search />
  </HeaderContainer>
);

export default Header;
