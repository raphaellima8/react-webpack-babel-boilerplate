import { combineReducers } from 'redux';
import { itemsPerPage } from './itemsPerPage';
import { searchTerm } from './search';
import { paginator } from './paginator';

const initialState = {
  amountDocs: 0,
  currentPage: 0,
  itemsPerPage: 0,
  pages: 0,
  products: []
};

const productsPage = (state = initialState, action) => {
  if (action.type === 'PRODUCT_LIST_INFO') {
    return action.payload;
  }

  return state;
};

export default combineReducers({
  itemsPerPage,
  productsPage,
  searchTerm,
  paginator
});
