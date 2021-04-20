import {SET_CART, ADD_CART, REMOVE_CART} from "../types"

const initialState = {
  carts: [],
  error: null,
  loading: true
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case SET_CART().type:
    return { ...state, carts: payload, loading: false }

  case ADD_CART().type:
    return { ...state, carts: [...state.carts, payload] }

  case REMOVE_CART().type:
    const updated = state.carts.filter(cart => +cart.id !== +payload.id)
    return { ...state, carts: updated }

  default:
    return state
  }
}
