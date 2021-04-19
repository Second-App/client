import { fetchCategories, getOneCategory } from './categories'
import { fetchProducts, getOneProduct, addProduct, deleteProductById } from './products'
import { fetchTypes, getOneType } from './types'
import { userLogin, userRegister, getProfileById, editProfile } from './users'
import { fetchWishlist, addToWishlist, deleteWishlist} from './wishlists'

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
  getProfileById,
  deleteProductById,
  fetchWishlist,
  addToWishlist,
  deleteWishlist,
}
