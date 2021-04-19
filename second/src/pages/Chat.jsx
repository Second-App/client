import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchChatsUsers, fetchChatDetail } from '../store/actions';
import { Loading } from '../components';

export default function Chat({ type }) {
  const { chats, loading: chatsLoading, error: chatsError } = useSelector(
    (state) => state.chatReducer
  );
  const {
    chatsDetail,
    loading: chatsDetailLoading,
    error: chatsDetailError,
  } = useSelector((state) => state.chatReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchChatsUsers());
  }, [chatsDetail]);

  let historyUsersChat;

  if (chats.receive) {
    historyUsersChat = chats.receive.reduce((r, a) => {
      r[a.User.name] = r[a.User.name] || [];
      r[a.User.name].push(a);
      return r;
    }, Object.create(null));
  }

  let historyUsersChatArray = [];

  for (let key in historyUsersChat) {
    historyUsersChatArray.push([key, historyUsersChat[key][0]['SenderId']]);
  }

  let fullChatsArray = [];

  if (chatsDetail.send && chatsDetail.receive) {
    chatsDetail.send.forEach((chat) => {
      fullChatsArray.push(chat);
    });

    chatsDetail.receive.forEach((chat) => {
      fullChatsArray.push(chat);
    });

    fullChatsArray.sort((a, b) => {
      return parseFloat(a.id) - parseFloat(b.id);
    });
  }

  const userChatOnClick = (SenderId) => {
    dispatch(fetchChatDetail(SenderId));
  };

  if (chatsError || chatsDetailError) return <div>error</div>;
  if (chatsLoading || chatsDetailLoading) return <Loading />;

  return (
    <div className="box mt-5">
      <div className="columns">
        <div className="column is-one-quarter ">
          <div className="columns ml-2 mt-2">Chats</div>
          {historyUsersChatArray
            ? historyUsersChatArray.map((user) => {
                return (
                  <div
                    className="columns has-background-light p-4 mt-1 mx-1"
                    onClick={() => {
                      userChatOnClick(user[1]);
                    }}
                  >
                    {user[0]}
                  </div>
                );
              })
            : ''}
        </div>
        <div className="column mt-5">
          <div className="columns">
            <div className="column is-8 chat-box has-background-light is-flex is-flex-direction-column">
              {fullChatsArray.length
                ? fullChatsArray.map((chat) => {
                    return (
                      <div className="columns has-background-grey-light p-4 mt-1 mx-1">
                        <div className="column">
                          <div
                            className={
                              Number(chat.SenderId) === Number(localStorage.id)
                                ? 'is-flex is-justify-content-flex-end title is-6'
                                : 'is-flex is-justify-content-flex-start title is-6'
                            }
                          >
                            <div className="title is-6">{chat.User.name}</div>
                          </div>
                          <div
                            className={
                              Number(chat.SenderId) === Number(localStorage.id)
                                ? 'is-flex is-justify-content-flex-end'
                                : 'is-flex is-justify-content-flex-start'
                            }
                          >
                            <div className="columns content">
                              {chat.message}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                : ''}
            </div>
          </div>
          <div className="columns mt-4 pb-2">
            <input
              className="input is-info is-focused"
              type="text"
              placeholder="Type a message"
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
}
