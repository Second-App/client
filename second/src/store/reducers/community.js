import {SET_COMMUNITY, ADD_COMMUNITY, REMOVE_ONE_COMMUNITY} from '../types'

const initialState = {
  community: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case SET_COMMUNITY().type:
    return { ...state, community: payload }

  case ADD_COMMUNITY().type:
    return { ...state, community: [...state.community, payload] }

  case REMOVE_ONE_COMMUNITY().type:
    const updated = state.community.filter(comm => +comm.id !== +payload.id)
    return { ...state, community: updated }

  default:
    return state
  }
}
