import { SET_WISHLIST, ADD_WISHLIST, REMOVE_WISHLIST} from '../types'

const initialState = {
  data: []
}

export default ( state = initialState, {type, payload}) => {
  switch (type) {
    case SET_WISHLIST().type :
      return { ...state, data: payload}
    case ADD_WISHLIST().type :
      return { ...state, data: [...state.data, payload]}
    case REMOVE_WISHLIST().type :
      const updated = state.data.filter( wishlist => +wishlist.id !== payload.id)
      return { ...state, data: updated}
    default:
      return state
  }
}