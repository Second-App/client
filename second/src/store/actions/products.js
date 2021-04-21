import axios from '../../axios';
import { toast } from 'react-toastify';
import {
  SET_PRODUCTS,
  SET_ONE_PRODUCT,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  SET_LOADING,
  SET_ERROR,
  SET_TOKEN_MIDTRANS,
  SET_AUCTION_START,
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
      var bodyFormData = new FormData();
      Object.keys(payload).map((index) => {
        bodyFormData.append(index, payload[index]);
      });

      const { data } = await axios({
        url: '/products',
        headers: {
          access_token: localStorage.access_token,
          'Content-Type': 'multipart/form-data',
        },
        data: bodyFormData,
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
      var bodyFormData = new FormData();
      Object.keys(payload).map((index) => {
        bodyFormData.append(index, payload[index]);
      });
      const { data } = await axios({
        url: `/products/${Number(id)}`,
        method: 'put',
        headers: { access_token: localStorage.access_token },
        data: bodyFormData,
      });
      console.log(payload, id, '<<ini di action');
    } catch (err) {
      dispatch(SET_ERROR(err))
    }
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
          currentUserBidId: payload.currentUserBidId,
        },
      });
      await dispatch(SET_AUCTION_START(true));
      await dispatch(getOneProduct(payload.id));
    } catch (err) {
      toast.error(
        'Minimum amount to bid must be at least Rp. 10.000 higher than the current bid',
        {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    }
  };
}

export function checkoutProduct(id, snap) {
  return async (dispatch) => {
    try {
      console.log('masuk action checkout Product');
      const response = await axios.get('/products/checkout/' + id, {
        headers: { access_token: localStorage.access_token },
      });
      // console.log(response.data.token, "<<ini response dari action");
      const payload = {
        token: response.data.token,
        productId: id,
      };
      await dispatch(SET_TOKEN_MIDTRANS(response.data.token));
      console.log(payload);
      snap(payload);
    } catch (err) {
      console.log(err);
    }
  };
}
