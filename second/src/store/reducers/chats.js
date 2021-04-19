import {
  SET_CHATS_USERS,
  SET_CHATS_DETAIL,
  SET_LOADING,
  SET_ERROR,
} from '../types';

const initialState = {
  chats: {},
  chatsDetail: {},
  loading: true,
  error: null,
};

function chatReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_CHATS_USERS().type:
      return { ...state, chats: payload };

    case SET_CHATS_DETAIL().type:
      return { ...state, chatsDetail: payload };

    case SET_LOADING().type:
      return { ...state, loading: payload };

    case SET_ERROR().type:
      return { ...state, error: payload };

    default:
      return state;
  }
}

export default chatReducer;
