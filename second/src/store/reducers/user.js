import {
  SET_LOGGED_USER,
  REMOVE_LOGGED_USER,
  ADD_USER_WISHLIST,
  REMOVE_USER_WISHLIST,
  GET_PROFILE_BY_ID
} from '../types'

const initialState = {
  currentUser: {},
  wishlist: [],
  isLogin: localStorage.access_token,
  userDetails: {}
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOGGED_USER().type:
      return { ...state, currentUser: payload, isLogin: true}

    case REMOVE_LOGGED_USER().type:
      return {...state, currentUser: payload, isLogin: false}
    
    case ADD_USER_WISHLIST().type:
      return {...state, wishlist: [...state.wishlist, payload]}

    case REMOVE_USER_WISHLIST().type:
      const output = state.wishlist.filter(wish => +wish.id !== +payload.id)
      return {...state, wishlist: output}

    case GET_PROFILE_BY_ID().type:
      return {...state, userDetails: payload}

    default:
      return state
  }
}
