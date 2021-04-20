import axios from '../../axios';
import { toast } from 'react-toastify';
import {
  SET_PRODUCTS,
  SET_ONE_PRODUCT,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  SET_LOADING,
  SET_ERROR,
} from '../types';
import { getOneType, getOneCategory } from './index';
import { getProfileById } from './users';

export function fetchProducts() {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/products');
      await dispatch(SET_PRODUCTS(data));
      await dispatch(SET_LOADING(false));
    } catch (err) {
      console.log(err);
      dispatch(SET_ERROR(err));
    }
  };
}

export function getOneProduct(id) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/products/' + id);
      await dispatch(SET_ONE_PRODUCT(data));
      await dispatch(SET_LOADING(false));
    } catch (err) {
      console.log(err);
      dispatch(SET_ERROR(err));
    }
  };
}

export function addProduct(payload, closeModal, toast, clearAllInput) {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios({
        url: '/products',
        headers: { access_token: localStorage.access_token },
        data: payload,
        method: 'POST',
      });
      await dispatch(ADD_PRODUCT(data));
      closeModal();
      await getOneType(data.TypeId);
      await getOneCategory(data.CategoryId);
      clearAllInput();
      toast.success('successfully added');
    } catch (err) {
      dispatch(SET_ERROR(err));
    }
  };
}

export function editProduct(payload, id) {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        url: `/products/${Number(id)}`,
        method: 'put',
        headers: { access_token: localStorage.access_token },
        data: payload,
      });
      console.log(payload, id, '<<ini di action');
    } catch (err) {}
  };
}

export function deleteProductById(id) {
  return async (dispatch) => {
    try {
      console.log('masuk action');
      const response = await axios.delete('/products/' + id, {
        headers: { access_token: localStorage.access_token },
      });
      console.log(response, '<<ini response dari action');
      await dispatch(REMOVE_PRODUCT(id));
      await dispatch(getProfileById(+localStorage.id));
      await dispatch(fetchProducts());
      toast.success('product deleted');
    } catch (err) {
      console.log(err);
    }
  };
}

export function updateAuction(payload) {
  return async (dispatch) => {
    try {
      await axios({
        url: `auction/${payload.id}`,
        method: 'PUT',
        headers: {
          access_token: localStorage.access_token,
        },
        data: {
          currentBid: payload.currentBid,
          currentUserBidName: payload.currentUserBidName,
        },
      });
      await dispatch(getOneProduct(payload.id));
    } catch (err) {
      console.log(err);
    }
  };
}
