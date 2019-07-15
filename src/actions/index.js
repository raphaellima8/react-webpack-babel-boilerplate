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

const fetchProduct = productId => async dispatch => {
  const payload = await fetchData('api/v1/product/findOne', {
    productId
  });
  dispatch(selectedProduct(payload.data.result));
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

const selectedProduct = productData => ({
  type: 'SELECT_PRODUCT',
  payload: productData
});

const updateProductPrices = (wholeProduct, price, promotionalPrice) => {
  return {
    type: 'UPDATE_PRICES',
    payload: {
      ...wholeProduct,
      newPrice: price,
      newPromotionalPrice: promotionalPrice
    }
  };
};

const fetchDeadline = zipCode => async dispatch => {
  dispatch({
    type: 'DEADLINE',
    payload: 4
  });
};

export {
  fetchProducts,
  setItemsPerPage,
  searchTerm,
  mountProductList,
  currentPaginatorPage,
  selectedImage,
  toggleModal,
  selectedProduct,
  fetchProduct,
  updateProductPrices,
  fetchDeadline
};
