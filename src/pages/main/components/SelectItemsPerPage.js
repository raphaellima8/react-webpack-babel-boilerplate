import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { fetchProducts, setItemsPerPage } from '../../../actions';

const Select = styled.select`
  width: 100%;
  border-radius: 0.3rem;
  padding: 0.5rem;
  font-size: 1rem;
  outline: none;

  @media (min-width: 600px) {
    width: 20%;
  }
`;

const mapStateToProps = state => {
  const { itemsPerPage } = state;
  return { itemsPerPage: itemsPerPage || 5, text: 'produtos por página' };
};

export class SelectItemsPerPage extends Component {
  constructor() {
    super();
    this.optionSelected = this.optionSelected.bind(this);
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  componentDidUpdate() {
    const { itemsPerPage } = this.props;
    this.props.setItemsPerPage(itemsPerPage);
    this.props.fetchProducts();
  }

  optionSelected(event) {
    const { value } = event.target;
    this.props.setItemsPerPage(Number(value));
  }

  render() {
    const { text, itemsPerPage } = this.props;
    return (
      <Select onChange={this.optionSelected} value={itemsPerPage}>
        <option value="5">5 {text}</option>
        <option value="10">10 {text}</option>
        <option value="15">15 {text}</option>
      </Select>
    );
  }
}

export default connect(
  mapStateToProps,
  {
    setItemsPerPage,
    fetchProducts
  }
)(SelectItemsPerPage);
