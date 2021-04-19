export const SET_WISHLIST = (payload) => {
  return {
    type: 'wishlist/setWishlist',
    payload
  }
}

export const ADD_WISHLIST = (payload) => {
  return {
    type: 'wishlist/addWishlist',
    payload
  }
}

export const REMOVE_WISHLIST = (payload) => {
  return {
    type: 'wishlist/removeWishlist',
    payload
  }
}