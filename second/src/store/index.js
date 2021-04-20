/** @format */

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {
    categoriesReducer,
    productsReducer,
    userReducer,
    transactionTypesReducer,
    wishlistReducer,
    chatReducer,
    cartReducer,
    communityReducer,
} from './reducers';

const reducer = combineReducers({
    categoriesReducer,
    productsReducer,
    userReducer,
    transactionTypesReducer,
    chatReducer,
    wishlists: wishlistReducer,
    cartReducer,
    communityReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
