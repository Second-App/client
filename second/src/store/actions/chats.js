/** @format */

import axios from '../../axios';
import {
  SET_CHATS_USERS,
  SET_CHATS_DETAIL,
  SET_ERROR,
  SET_LOADING,
} from '../types';

export function fetchChatsUsers() {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        url: '/chats',
        method: 'GET',
        headers: {
          access_token: localStorage.access_token,
        },
      });
      dispatch(SET_CHATS_USERS(data));
      dispatch(SET_LOADING(false));
    } catch (err) {
      console.log(err);
      dispatch(SET_ERROR(err));
    }
  };
}

export function fetchChatDetail(targetId) {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        url: `/chats?targetId=${targetId}`,
        method: 'GET',
        headers: {
          access_token: localStorage.access_token,
        },
      });
      dispatch(SET_CHATS_DETAIL(data));
      dispatch(SET_LOADING(false));
    } catch (err) {
      console.log(err);
      dispatch(SET_ERROR(err));
    }
  };
}
