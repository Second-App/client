import { SET_ONE_CATEGORY, SET_CATEGORIES } from './categories'
import { SET_ONE_T_TYPE, SET_T_TYPES } from './transactionTypes'
import { SET_ONE_PRODUCT, SET_PRODUCTS, REMOVE_PRODUCT, ADD_PRODUCT } from './products'
import { SET_LOGGED_USER, REMOVE_LOGGED_USER, ADD_USER_WISHLIST, REMOVE_USER_WISHLIST, GET_PROFILE_BY_ID } from './user'

const SET_LOADING = (payload) => {
  return {
    type: 'loading/loading',
    payload: false,
  }
}

const SET_ERROR = (payload) => {
  return {
    type: 'error/error',
    payload,
  }
}

export {
  SET_LOADING,
  SET_ERROR,
  SET_ONE_CATEGORY,
  SET_CATEGORIES,
  SET_ONE_T_TYPE,
  SET_T_TYPES,
  SET_ONE_PRODUCT,
  SET_PRODUCTS,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  SET_LOGGED_USER,
  REMOVE_LOGGED_USER,
  ADD_USER_WISHLIST,
  REMOVE_USER_WISHLIST,
  GET_PROFILE_BY_ID
}