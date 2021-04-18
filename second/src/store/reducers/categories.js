import {
  SET_CATEGORIES,
  SET_ONE_CATEGORY,
  SET_LOADING,
  SET_ERROR,
} from '../types'

const initialState = {
  categories: [],
  singleCategory: {},
  loading: true,
  error: null,
}

function categoryReducer(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case SET_CATEGORIES().type:
      return { ...state, categories: payload }

    case SET_ONE_CATEGORY().type:
      return { ...state, singleCategory: payload }

    case SET_LOADING().type:
      return { ...state, loading: payload }

    case SET_ERROR().type:
      return { ...state, error: payload }
      
    default:
      return state
  }
}

export default categoryReducer
