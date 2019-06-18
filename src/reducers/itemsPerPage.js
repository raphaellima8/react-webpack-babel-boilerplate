export const itemsPerPage = (amountItems = 5, action) => {
  if (action.type === 'ITEMS_PER_PAGE') {
    return action.payload;
  }
  return amountItems;
};
