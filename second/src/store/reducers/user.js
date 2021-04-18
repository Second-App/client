import {
  SET_LOGGED_USER,
  REMOVE_LOGGED_USER,
  ADD_USER_WISHLIST,
  REMOVE_USER_WISHLIST
} from '../types'

const initialState = {
  currentUser: {},
  wishlist: [],
  isLogin: localStorage.access_token
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

    default:
      return state
  }
}
