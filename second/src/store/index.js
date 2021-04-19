import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {categoriesReducer, productsReducer, userReducer, transactionTypesReducer, wishlistReducer} from './reducers'

const reducer = combineReducers({
  categoriesReducer,
  productsReducer,
  userReducer,
  transactionTypesReducer,
  wishlists: wishlistReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store
