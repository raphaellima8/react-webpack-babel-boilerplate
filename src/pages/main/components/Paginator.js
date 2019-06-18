import React, { Component } from 'react';
import { connect } from 'react-redux';

import styled, { css } from 'styled-components';

import { fetchProducts, currentPaginatorPage } from '../../../actions';

const mapStateToProps = state => {
  return {
    ...state.productsPage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    nextPage: () => dispatch(fetchProducts()),
    setPage: pageNumber => dispatch(currentPaginatorPage(pageNumber))
  };
};

const PaginatorContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  align-items: baseline;
  @media (min-width: 600px) {
    display: flex;
    margin-top: 0;
    justify-content: flex-end;
    width: min-content;
  }
`;
const PaginatorArrowContainer = styled.div`
  ${({ disabled }) => {
    return disabled
      ? css`
          pointer-events: none;
          opacity: 0.5;
        `
      : css``;
  }};
  cursor: pointer;
  @media (min-width: 600px) {
    display: flex;
    width: 3rem;
    justify-content: space-around;
  }
`;

const PaginatorIcon = styled.i.attrs(({ role, tabIndex }) => {
  return { role, tabIndex };
})`
  display: none;
  @media (min-width: 600px) {
    display: block;
  }
`;

const PaginatorButton = styled.button.attrs(({ type, key, data }) => {
  return {
    type,
    key,
    'data-id': data
  };
})`
  ${({ disableBtn }) => {
    return disableBtn
      ? css`
          pointer-events: none;
          opacity: 0.5;
          border: 1px solid lightgray;
          border-radius: 0.5rem;
          outline: none;
          background: lightgray;
        `
      : css``;
  }};
  &:not(:last-child) {
    margin-right: 1rem;
  }
  padding: 0.9rem;
  border: 1px solid lightgray;
  border-radius: 0.5rem;
  background: transparent;
  outline: none;
  @media (min-width: 600px) {
    box-sizing: border-box;
    border: 1px solid white;
    border-radius: 0.5rem;
    outline: none;
    &:hover {
      border-color: lightgray;
      cursor: pointer;
    }
  }
`;

const PaginatorList = styled.ul`
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (min-width: 600px) {
    margin: 0 1rem;
    width: min-content;
  }
`;

class Paginator extends Component {
  state = {
    numberOfPages: 1,
    currentPage: 1,
    maxItemsToShow: 5,
    firstItem: 1,
    lastItem: 5,
    left: 'L',
    right: 'R',
    firstPage: 1,
    lastPage: 1
  };

  componentWillReceiveProps({ pages }) {
    const { currentPage, numberOfPages, maxItemsToShow } = this.state;
    let state = {
      currentPage,
      numberOfPages: pages,
      lastPage: pages
    };
    if (pages !== numberOfPages) {
      state = {
        ...state,
        currentPage: 1,
        lastItem: pages < maxItemsToShow ? pages : 5,
        firstItem: 1
      };
    }
    this.setState(state);
  }

  /* eslint-disable-next-line consistent-return */
  getPreviousMultipleOfFive(num) {
    for (let i = 1; i <= num; i++) {
      if (this.isMultipleOfFive(num - i)) {
        return i;
      }
    }
  }

  getButton(id) {
    const { currentPage } = this.state;
    return (
      <PaginatorButton
        type="button"
        key={id}
        data={id}
        disableBtn={currentPage === id}
        onClick={this.onPageClick}
      >
        {id}
      </PaginatorButton>
    );
  }

  navigateTo = (pageNumber, direction) => {
    this.props.setPage(Number(pageNumber));
    this.setState({ currentPage: Number(pageNumber) });

    this.updateNavigator(Number(pageNumber), direction);
    this.props.nextPage();
  };

  onPageClick = e => {
    this.navigateTo(e.currentTarget.dataset.id, null);
  };

  updateNavigator(pageNumber, direction) {
    const {
      currentPage,
      maxItemsToShow,
      numberOfPages,
      left,
      right
    } = this.state;
    let firstItem;
    let lastItem;

    if (!direction) {
      this.updateNavigatorToLastPage(pageNumber);
      return;
    }

    if (direction === right && this.isMultipleOfFive(currentPage)) {
      firstItem = pageNumber;
      const limit = currentPage + maxItemsToShow - 1;
      lastItem = limit > numberOfPages ? numberOfPages : limit;
      this.setState({ firstItem, lastItem });
    } else if (direction === left && this.isMultipleOfFive(pageNumber)) {
      firstItem = pageNumber - 4;
      lastItem = pageNumber;
      this.setState({ firstItem, lastItem });
    }
  }

  isMultipleOfFive(num) {
    return Number(num) % 5 === 0;
  }

  updateNavigatorToLastPage(pageNumber) {
    const { numberOfPages, lastPage, maxItemsToShow, firstPage } = this.state;

    if (pageNumber === firstPage) {
      const lastItem =
        numberOfPages < maxItemsToShow ? numberOfPages : maxItemsToShow;
      this.setState({ firstItem: 1, lastItem });
    }

    if (pageNumber === lastPage) {
      const subNumber = this.isMultipleOfFive(lastPage)
        ? maxItemsToShow
        : this.getPreviousMultipleOfFive(lastPage);
      const firstItem = lastPage - subNumber + 1;
      this.setState({ firstItem, lastItem: numberOfPages });
    }
  }

  createNavigationPages() {
    const { firstItem, lastItem } = this.state;
    const list = [];
    for (let i = firstItem; i <= lastItem; i++) {
      list.push(this.getButton(i));
    }
    return list;
  }

  render() {
    const { currentPage, lastPage, firstPage, left, right } = this.state;

    return (
      <PaginatorContainer>
        <PaginatorArrowContainer disabled={currentPage > firstPage}>
          <PaginatorIcon
            role="link"
            tabIndex="0"
            onClick={e => this.navigateTo(firstPage)}
            className="fa fa-angle-double-left"
          />
          <PaginatorIcon
            role="link"
            tabIndex="0"
            onClick={e => this.navigateTo(currentPage - 1, left)}
            className="fa fa-angle-left"
          />
        </PaginatorArrowContainer>
        <PaginatorList>{this.createNavigationPages()}</PaginatorList>
        <PaginatorArrowContainer disabled={currentPage === lastPage}>
          <PaginatorIcon
            role="link"
            tabIndex="0"
            onClick={e => this.navigateTo(currentPage + 1, right)}
            className="fa fa-angle-right"
          />
          <PaginatorIcon
            role="link"
            tabIndex="0"
            onClick={e => this.navigateTo(lastPage)}
            className="fa fa-angle-double-right"
          />
        </PaginatorArrowContainer>
      </PaginatorContainer>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Paginator);
