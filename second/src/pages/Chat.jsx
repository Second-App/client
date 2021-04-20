import React, { useEffect, useContext } from 'react';
import { SocketContext } from '../socket.io/socket.js';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchChatsUsers,
  fetchChatDetail,
  sendMessage,
} from '../store/actions';
import { Loading } from '../components';

export default function Chat({ type }) {
  const socket = useContext(SocketContext);

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
    socket.on('getSendChat', (data) => dispatch(fetchChatDetail(data)));
  }, []);

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
    localStorage.SenderId = SenderId;
  };

  const handleSendMessage = async (event) => {
    event.preventDefault();
    await dispatch(
      sendMessage({
        SenderId: localStorage.id,
        ReceiverId: localStorage.SenderId,
        message: event.target.message.value,
      })
    );
    event.target.message.value = '';
    await dispatch(fetchChatDetail(localStorage.SenderId));
    await socket.emit('sendChat', localStorage.id);
  };

  if (chatsError || chatsDetailError) return <div>error</div>;
  if (chatsLoading || chatsDetailLoading) return <Loading />;

  return (
    <div className="box mt-5">
      {console.log(chatsDetail.send)}
      <div className="columns"
        style={{
          paddingTop: '20px',
          paddingBottom: '20px',
          paddingLeft: '20px',
          paddingRight: '20px'
        }}
      >
        <div className="column is-one-quarter theChat"
          style={{
            height: '100vh',
            border: '2px solid #7300FC',
            marginTop: '12px'
          }}
        >
          <div className="columns mt-2"
            style={{
              borderBottom: '2px solid #7300FC'
            }}
          >
            <span className="title is-4 ml-4 mb-4">
              Chats
            </span>
          </div>
          {historyUsersChatArray
            ? historyUsersChatArray.map((user) => {
                return (
                  <div
                    className="columns has-background-light mt-1 mx-1"
                    onClick={() => {
                      userChatOnClick(user[1]);
                    }}
                  >
                    <div className='button column'
                      style={{
                        backgroundColor: 'white',
                        border: '2px solid #7300FC'
                      }}
                    >
                      {user[0]}
                    </div>
                  </div>
                );
              })
            : ''}
        </div>
        <div className="column"
          style={{
            marginTop: '0px'
          }}
        >
          <div className="theChat"
            style={{
              height: '100vh',
              border: '2px solid #7300FC'
            }}
          >
                {fullChatsArray.length
                  ? fullChatsArray.map((chat) => {
                      return (
                        <div className="columns p-4 mt-1 mx-1"
                          style={
                              Number(chat.SenderId) === Number(localStorage.id)
                              ? {border: '2px solid #FFB979'}
                              : {border: '2px solid #AA89D2'}
                            }
                        >
                          <div className="column"
                          >
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
                              <div className="columns content ml-1 mr-1"
                              
                              >
                                {chat.message}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })
              : ''}
          </div>
          <div className="ml-1 mt-4 pb-2">
            <form
              onSubmit={(event) => {
                handleSendMessage(event);
              }}
            >
              <input
                className="input is-info is-focused"
                type="text"
                name="message"
                placeholder="Type a message"
                style={{ width: '760px' }}
              ></input>
              <input className="button is-primary ml-5" type="submit" value="send"/>
            </form>
            </div>
          </div>
      </div>
    </div>
  );
}
