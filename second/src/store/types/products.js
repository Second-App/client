export const SET_PRODUCTS = (payload) => {
  return {
    type: 'setproducts/setproducts',
    payload,
  };
};

export const SET_ONE_PRODUCT = (payload) => {
  return {
    type: 'setOneProduct/setOneProduct',
    payload,
  };
};

export const ADD_PRODUCT = (payload) => {
  return {
    type: 'addProduct/product',
    payload,
  };
};

export const REMOVE_PRODUCT = (payload) => {
  return {
    type: 'removeProduct/removeProduct',
    payload,
  };
};

export const SET_TOKEN_MIDTRANS = (payload) => {
  return {
    type: 'tokenMidtrans/setTokenMidtrans',
    payload,
  };
};

export const SET_SOLD_PRODUCT = (payload) => {
  return {
    type: 'soldProduct/setSoldProduct',
    payload,
  };
};
