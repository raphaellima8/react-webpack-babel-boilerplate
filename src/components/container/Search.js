import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchProducts, searchTerm } from '../../actions';

import Input from '../presentational/Input';

const SearchContainer = styled.div`
  display: flex;
  border: 1px solid #ccc;
  border-radius: 15px;
  overflow: hidden;
  align-self: center;
  width: 10rem;
  @media (min-width: 600px) {
    width: 30rem;
  }
`;

const FormContainer = styled.form`
  width: 100%;
  display: flex;
  align-items: baseline;
`;

const SearchIcon = styled.i`
  padding: 0.5rem;
`;

class Search extends Component {
  onFormSubmit = event => {
    event.preventDefault();
    this.makeSearch();
  };

  onInputChange = event => {
    const { value } = event.target;
    this.props.searchTerm(value);
    if (value === '') {
      this.makeSearch();
    }
  };

  makeSearch() {
    this.props.fetchProducts();
  }

  render() {
    return (
      <SearchContainer>
        <FormContainer onSubmit={this.onFormSubmit}>
          <SearchIcon className="fa fa-search" />
          <Input
            type="search"
            placeholder="Buscar produto"
            term={this.props.term}
            onInputChange={this.onInputChange}
            removeDefaultStyle={Boolean(true)}
          />
        </FormContainer>
      </SearchContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    term: state.searchTerm
  };
};

export default connect(
  mapStateToProps,
  {
    fetchProducts,
    searchTerm
  }
)(Search);
