/** @format */

import React from 'react';
import { SocketContext, socket } from './socket.io/socket.js';
import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { Home, Profile, Category, ProductDetail, Chat, Community, Type, Auction, Cart } from './pages/index.js';

import { Navbar, UpperFooter, Footer } from './components/index.js';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import './App.sass';

function App() {
    return (
        <>
            <SocketContext.Provider value={socket}>
                <div
                    className='box'
                    style={{
                        minHeight: '100vh',
                        borderRadius: '0px',
                    }}>
                    <Router className='App'>
                        <div className='box box-all' style={{ border: '5px solid #7300FC', borderRadius: '0px' }}>
                            <Navbar />

                            <Switch>
                                <Route exact path='/'>
                                    <Home />
                                </Route>
                                <Route path='/profile'>
                                    <Profile />
                                </Route>
                                <Route path='/categories/:id'>
                                    <Category />
                                </Route>
                                <Route path='/products/:id'>
                                    <ProductDetail />
                                </Route>
                                <Route path='/chat'>
                                    <Chat />
                                </Route>
                                <Route path='/community'>
                                    <Community />
                                </Route>
                                <Route path='/type/:id'>
                                    <Type />
                                </Route>
                                <Route path='/auction/:id'>
                                    <Auction />
                                </Route>
                                <Route path='/carts'>
                                    <Cart />
                                </Route>
                            </Switch>
                            <UpperFooter />
                            <Footer />
                        </div>
                    </Router>
                </div>
            </SocketContext.Provider>
        </>
    );
}

export default App;
