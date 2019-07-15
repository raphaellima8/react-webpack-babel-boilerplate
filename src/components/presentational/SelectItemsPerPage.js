import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Select from './Select';
import { fetchProducts, setItemsPerPage } from '../../actions';

const SelectContainer = styled(Select)`
  @media (min-width: 600px) {
    width: 20%;
  }
`;

const mapStateToProps = ({ itemsPerPage }) => ({
  itemsPerPage: itemsPerPage || 5,
  text: 'produtos por página'
});

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

  optionSelected({ target }) {
    const { value } = target;
    this.props.setItemsPerPage(Number(value));
  }

  render() {
    const { text, itemsPerPage } = this.props;
    return (
      <SelectContainer onChangeCb={this.optionSelected} value={itemsPerPage}>
        <option value="5">5 {text}</option>
        <option value="10">10 {text}</option>
        <option value="15">15 {text}</option>
      </SelectContainer>
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
