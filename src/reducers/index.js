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

const emptyProduct = {
  name: '',
  category: '',
  price: 0,
  promotionalPrice: 0,
  images: []
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

const product = (state = emptyProduct, { type, payload }) => {
  switch (type) {
    case 'SELECT_PRODUCT':
      return {
        ...payload
      };
    case 'UPDATE_PRICES':
      return {
        ...payload,
        price: payload.price,
        promotionalPrice: payload.promotionalPrice
      };
    default:
      return state;
  }
};

const deadline = (state = {}, { type, payload }) => {
  return type === 'DEADLINE' ? payload : state;
};

export default combineReducers({
  itemsPerPage,
  productsPage,
  searchTerm,
  paginator,
  imageToEnlarge,
  modalState,
  product,
  deadline
});
