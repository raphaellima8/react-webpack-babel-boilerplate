import fetchData from '../services/api';

const fetchProducts = () => async (dispatch, getState) => {
  const { searchTerm, itemsPerPage, paginator } = getState();
  const payload = await fetchData('api/v1/product/all', {
    search: searchTerm,
    limit: itemsPerPage,
    page: paginator.page
  });
  const { result } = payload.data;
  dispatch(mountProductList(result));
};

const setItemsPerPage = amoutItems => {
  return {
    type: 'ITEMS_PER_PAGE',
    payload: amoutItems
  };
};

const mountProductList = products => {
  return { type: 'PRODUCT_LIST_INFO', payload: products };
};

const searchTerm = term => {
  return {
    type: 'SEARCH_TERM',
    payload: term
  };
};

const currentPaginatorPage = page => {
  return {
    type: 'CURRENT_PAGE',
    payload: {
      page
    }
  };
};

const selectedImage = imageSrc => {
  return {
    type: 'SELECT_IMAGE',
    payload: imageSrc
  };
};

const toggleModal = isOpen => {
  return {
    type: 'TOGGLE_MODAL',
    payload: isOpen
  };
};

export {
  fetchProducts,
  setItemsPerPage,
  searchTerm,
  mountProductList,
  currentPaginatorPage,
  selectedImage,
  toggleModal
};
