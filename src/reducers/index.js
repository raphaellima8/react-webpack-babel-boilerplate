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

const imageToEnlarge = (state = '', action) => {
  if (action.type === 'SELECT_IMAGE') {
    return action.payload;
  }
  return state;
};

const modalState = (state = false, action) => {
  if (action.type === 'TOGGLE_MODAL') {
    return action.payload;
  }
  return state;
};

export default combineReducers({
  itemsPerPage,
  productsPage,
  searchTerm,
  paginator,
  imageToEnlarge,
  modalState
});
