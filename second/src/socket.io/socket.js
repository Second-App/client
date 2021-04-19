import React from 'react';
import io from 'socket.io-client';

const socketUrl = 'http://localhost:3001';

export const socket = io.connect(socketUrl);
export const SocketContext = React.createContext();
