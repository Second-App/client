export const SET_CART = (payload) => {
  return {
    type: 'cart/setCart',
    payload
  }
}

export const ADD_CART = (payload) => {
  return {
    type: "cart/addCart",
    payload
  }
}

export const REMOVE_CART = (payload) => {
  return {
    type: "cart/removeCart",
    payload
  }
}