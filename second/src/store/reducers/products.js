import {
  SET_PRODUCTS,
  SET_ONE_PRODUCT,
  REMOVE_PRODUCT,
  ADD_PRODUCT,
  SET_ERROR,
  SET_LOADING,
  SET_TOKEN_MIDTRANS,
} from '../types';

const initialState = {
  products: [],
  singleProduct: {},
  tokenMidtrans: '',
  loading: true,
  error: null,
};

const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PRODUCTS().type:
      return { ...state, products: payload };

    case SET_ONE_PRODUCT().type:
      return { ...state, singleProduct: payload };

    case REMOVE_PRODUCT().type:
      const output = state.products.filter(
        (product) => +product.id !== +payload
      );
      return { ...state, products: output };

    case ADD_PRODUCT().type:
      return { ...state, products: [...state.products, payload] };

    case SET_LOADING().type:
      return { ...state, loading: payload };

    case SET_ERROR().type:
      return { ...state, error: payload };

    case SET_TOKEN_MIDTRANS().type:
      return { ...state, tokenMidtrans: payload };

    default:
      return state;
  }
};

export default productReducer;
