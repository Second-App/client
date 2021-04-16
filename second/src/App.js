/** @format */

import React from 'react';

import { Home, Profile, Category, ProductDetail, Chat, Community, Type, Auction } from './pages/index.js';

import { Navbar, Footer } from './components/index.js';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import './App.sass';

function App() {
    return (
        <div className='box' style={{ minHeight: '100vh', borderRadius: '0px' }}>
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
                        <Route path='/category/:id'>
                            <Category />
                        </Route>
                        <Route path='/productDetail/:id'>
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

                    <Footer />
                </div>
            </Router>
        </div>
    );
}

export default App;
