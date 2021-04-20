import { SET_ONE_CATEGORY, SET_CATEGORIES } from './categories'
import { SET_ONE_T_TYPE, SET_T_TYPES } from './transactionTypes'
import {
  SET_ONE_PRODUCT,
  SET_PRODUCTS,
  REMOVE_PRODUCT,
  ADD_PRODUCT,
} from './products'
import {
  SET_LOGGED_USER,
  REMOVE_LOGGED_USER,
  ADD_USER_WISHLIST,
  REMOVE_USER_WISHLIST,
  GET_PROFILE_BY_ID,
} from './user'
import { SET_WISHLIST, ADD_WISHLIST, REMOVE_WISHLIST } from './wishlists'
import { SET_CHATS_USERS, SET_CHATS_DETAIL } from './chats.js'
import { SET_CART, ADD_CART, REMOVE_CART } from './cart'

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
  GET_PROFILE_BY_ID,
  SET_WISHLIST,
  ADD_WISHLIST,
  REMOVE_WISHLIST,
  SET_CHATS_USERS,
  SET_CHATS_DETAIL,
  SET_CART,
  REMOVE_CART,
  ADD_CART
}
