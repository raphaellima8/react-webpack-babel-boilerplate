export const paginator = (pageNumber = 1, action) => {
  if (action.type === 'CURRENT_PAGE') {
    return action.payload;
  }
  return pageNumber;
};
