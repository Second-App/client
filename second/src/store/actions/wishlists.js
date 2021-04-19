import axios from '../../axios'
import { SET_WISHLIST, ADD_WISHLIST, REMOVE_WISHLIST, SET_LOADING, SET_ERROR} from '../types'

export function fetchWishlist() {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/wishlists/', {
        headers: { access_token: localStorage.access_token}
      })
      await dispatch(SET_WISHLIST(data))
      await dispatch(SET_LOADING(false))
    } catch (error) {
      await dispatch(SET_ERROR(error))
    }
  }
}

export function addToWishlist(payload) {
  return async (dispatch, getState) => {
    try {
      
      const {data} = await axios({
        url: '/wishlists/',
        headers: { access_token: localStorage.access_token },
        data: {
          ProductId: payload.id
        },
        method: 'post'
      })
      await dispatch(ADD_WISHLIST(data))
      
    } catch (error) {
      
      dispatch(SET_ERROR(error)) 
    }
  }
}

export function deleteWishlist(id) {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`/wishlists/${id}`, {
        headers: {
          access_token:localStorage.access_token
        }
      })
      
      if (response.status === 200) dispatch(fetchWishlist())
    } catch (error) {
      
      dispatch(error)
    }
  }
}