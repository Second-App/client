export const SET_CHATS_USERS = (payload) => {
  return {
    type: 'chats/setChats',
    payload,
  };
};

export const SET_CHATS_DETAIL = (payload) => {
  return {
    type: 'chatsDetail/setChatsDetail',
    payload,
  };
};
