/** @format */

import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { Home, Profile, Category, ProductDetail, Chat, Community, Type, Auction } from './pages/index.js';

import { Navbar, UpperFooter, Footer } from './components/index.js';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import './App.sass';

function App() {
    return (
        <>
            <div
                className='box'
                style={{
                    minHeight: '100vh',
                    borderRadius: '0px',
                }}>
                <Router className='App'>
                    <div className='box box-all' style={{ border: '', borderColor: '#7300FC' }}>
                        <Navbar />

                        <Switch>
                            <Route exact path='/'>
                                <Home />
                            </Route>
                            <Route path='/profile/:id'>
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
                        </Switch>
                        <UpperFooter />
                        <Footer />
                    </div>
                </Router>
            </div>
        </>
    );
}

export default App;
