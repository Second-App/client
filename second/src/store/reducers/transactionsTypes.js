import {SET_ONE_T_TYPE, SET_T_TYPES, SET_LOADING, SET_ERROR} from '../types'

const initialState = {
  types: [],
  singleType: {},
  loading: true,
  error: null
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case SET_T_TYPES().type:
    return { ...state, types: payload}

  case SET_ONE_T_TYPE().type:
    return {...state, singleType: payload}

  case SET_LOADING().type:
    return {...state, loading: payload}
  
  case SET_ERROR().type: 
    return {...state, error: payload}

  default:
    return state
  }
}
