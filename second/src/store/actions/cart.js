import axios from '../../axios'
import { toast } from 'react-toastify'
import {
  SET_CART,
  ADD_CART,
  REMOVE_CART,
  SET_ERROR,
  SET_LOADING,
} from '../types'

export function fetchCart() {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/carts', {
        headers: { access_token: localStorage.access_token },
      })
      console.log(data)
      dispatch(SET_CART(data))
      dispatch(SET_LOADING(false))
    } catch (err) {
      console.log(err)
      dispatch(SET_ERROR(err))
    }
  }
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
      })
      toast.success(data.msg)
      await dispatch(ADD_CART(data))
      dispatch(SET_LOADING(false))
    } catch (err) {
      console.log(err)
      toast.error(err.msg)
    }
  }
}

export function deleteOneCart(id) {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "DELETE",
        url: "/carts/" + id,
        headers: {
          access_token: localStorage.access_token
        }
      })
      console.log(data.msg)
      await dispatch(REMOVE_CART({
        id
      }))
      toast.success(data.msg)
    } catch (err) {
      toast.error(err.msg)
    }
  }
}
