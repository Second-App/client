import axios from '../../axios'
import { toast } from 'react-toastify'
import {
  SET_PRODUCTS,
  SET_ONE_PRODUCT,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  SET_LOADING,
  SET_ERROR,
} from '../types'
import { getOneType, getOneCategory } from './index'

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

export function addProduct(payload, closeModal, toast, clearAllInput) {
  console.log('masuk gan')
  return async (dispatch, getState) => {
    try {
      const { data } = await axios({
        url: '/products',
        headers: { access_token: localStorage.access_token },
        data: payload,
        method: 'POST',
      })
      await dispatch(ADD_PRODUCT(data))
      closeModal()
      await getOneType(data.TypeId)
      await getOneCategory(data.CategoryId)
      clearAllInput()
      toast.success('successfully added')
    } catch (err) {
      dispatch(SET_ERROR(err))
    }
  }
}

export function deleteProductById(id) {
  return async (dispatch) => {
    try {
      await axios.delete('/products/' + id, {
        headers: { access_token: localStorage.access_token },
      })
      await dispatch(REMOVE_PRODUCT(id))
      toast.success('product deleted')
    } catch (err) {
      console.log(err)
    }
  }
}