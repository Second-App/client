export const SET_LOGGED_USER = (payload) => {
  return {
    type: 'setLogged/user',
    payload
  }
}

export const GET_PROFILE_BY_ID = (payload) => {
  return {
    type: "getProfile/user",
    payload
  }
}

export const REMOVE_LOGGED_USER = (payload) => {
  return {
    type: 'remove/loggedUser',
    payload: false
  }
}

export const ADD_USER_WISHLIST = (payload) => {
  return {
    type: 'AddUser/wishlist',
    payload
  }
}

export const REMOVE_USER_WISHLIST = (payload) => {
  return {
    type: 'removeUser/wishlist',
    payload
  }
}