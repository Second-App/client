import axios from '../../axios'
import {
  SET_PRODUCTS,
  SET_ONE_PRODUCT,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  SET_LOADING,
  SET_ERROR,
} from '../types'

export function fetchProducts() {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/products')
      await dispatch(SET_PRODUCTS(data))
      await dispatch(SET_LOADING(false))
    } catch (err) {
      console.log(err)
      dispatch(SET_ERROR(err))
    }
  }
}

export function getOneProduct(id) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/products/' + id)
      await dispatch(SET_ONE_PRODUCT(data))
      await dispatch(SET_LOADING(false))
    } catch (err) {
      console.log(err)
      dispatch(SET_ERROR(err))
    }
  }
}
