import axios from '../../axios';
import { toast } from 'react-toastify';
import { SET_CART, ADD_CART, REMOVE_CART, SET_ERROR, SET_LOADING } from '../types';

export function fetchCart() {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/carts', {
        headers: { access_token: localStorage.access_token },
      });
      console.log(data);
      dispatch(SET_CART(data));
      dispatch(SET_LOADING(false));
    } catch (err) {
      console.log(err);
      dispatch(SET_ERROR(err));
    }
  };
}

export function asyncAddToCart(payload) {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        url: '/carts',
        method: 'POST',
        data: payload,
        headers: {
          access_token: localStorage.access_token,
        },
      });
      const msg = data.msg || `added to cart`;
      toast.success(msg);
      await dispatch(ADD_CART(data));
      dispatch(SET_LOADING(false));
    } catch (err) {
      console.log(err);
      toast.error(err.msg);
    }
  };
}

export function deleteOneCart(id) {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: 'DELETE',
        url: '/carts/' + id,
        headers: {
          access_token: localStorage.access_token,
        },
      });
      console.log(data.msg);
      await dispatch(
        REMOVE_CART({
          id,
        })
      );
      toast.success(data.msg);
    } catch (err) {
      toast.error(err.msg);
    }
  };
}

export function updateSoldProduct(id) {
  return async (dispatch) => {
    try {
      console.log('masuk action update sold Product');
      await axios.patch('/products/sold/' + id, { sold: true });
      await axios.patch('products/available/' + id, { available: true });
      await dispatch(fetchCart());
    } catch (err) {
      console.log(err);
    }
  };
}

export function updateSoldConfirmed(payload) {
  return async (dispatch) => {
    try {
      console.log('masuk action update sold Product Confirmed');
      console.log(payload);
      await axios.patch('/users/topup/' + payload.UserId, { balance: Number(payload.price) });
      await axios.patch('products/available/' + payload.ProductId, { available: false });
      await dispatch(fetchCart());
      console.log('berhasil patch balance');
    } catch (err) {
      console.log(err, '>>>>>>>>>>>>>>>>>>>>>>>>>>>');
    }
  };
}
