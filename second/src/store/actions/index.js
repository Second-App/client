import { fetchCategories, getOneCategory } from './categories'
import {
  fetchProducts,
  getOneProduct,
  addProduct,
  editProduct,
  deleteProductById,
} from './products'
import { fetchTypes, getOneType } from './types'
import { userLogin, userRegister, getProfileById, editProfile } from './users'
import { fetchWishlist, addToWishlist, deleteWishlist } from './wishlists'
import { fetchChatsUsers, fetchChatDetail, sendMessage } from './chats'
import { fetchCart, asyncAddToCart, deleteOneCart } from './cart'

export {
  fetchCategories,
  getOneCategory,
  fetchProducts,
  getOneProduct,
  fetchTypes,
  getOneType,
  userLogin,
  userRegister,
  editProfile,
  addProduct,
  editProduct,
  getProfileById,
  deleteProductById,
  fetchWishlist,
  addToWishlist,
  deleteWishlist,
  fetchChatsUsers,
  fetchChatDetail,
  sendMessage,
  fetchCart,
  asyncAddToCart,
  deleteOneCart
}
