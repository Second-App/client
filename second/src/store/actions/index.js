import { fetchCategories, getOneCategory } from './categories';
import {
  fetchProducts,
  getOneProduct,
  addProduct,
  deleteProductById,
} from './products';
import { fetchTypes, getOneType } from './types';
import { userLogin, userRegister, getProfileById } from './users';
import { fetchWishlist, addToWishlist, deleteWishlist } from './wishlists';
import { fetchChatsUsers, fetchChatDetail } from './chats';

export {
  fetchCategories,
  getOneCategory,
  fetchProducts,
  getOneProduct,
  fetchTypes,
  getOneType,
  userLogin,
  userRegister,
  addProduct,
  getProfileById,
  deleteProductById,
  fetchWishlist,
  addToWishlist,
  deleteWishlist,
  fetchChatsUsers,
  fetchChatDetail,
};
