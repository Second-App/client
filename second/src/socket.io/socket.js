/** @format */

import React from 'react';
import io from 'socket.io-client';

const socketUrl = 'https://second-h8.herokuapp.com/';
// const socketUrl = 'http://localhost:3001'; // local

export const socket = io.connect(socketUrl);
export const SocketContext = React.createContext();
