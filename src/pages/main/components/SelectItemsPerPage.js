import React, { Component } from 'react';
import styled from 'styled-components';

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

export class SelectItemsPerPage extends Component {
  constructor() {
    super();
    this.optionSelected = this.optionSelected.bind(this);
  }

  componentDidMount() {
    // this.props.fetchProducts();
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

export default SelectItemsPerPage;
