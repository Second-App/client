import axios from '../../axios'
import { SET_LOGGED_USER, SET_ERROR } from '../types'

export function userLogin(payload, closeModal, setIsLogin) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post('/users/login', payload)
      await dispatch(SET_LOGGED_USER(data))
      localStorage.setItem('access_token', data.access_token)
      localStorage.setItem('id', data.id)
      setIsLogin(true)
      closeModal()
    } catch (err) {
      console.log(err)
      dispatch(SET_ERROR(err))
    }
  }
}

export function userRegister(payload, closeModal, openLoginModal) {
  return async (dispatch) => {
    try {
      await axios.post('/users/register', payload)
      closeModal()
      openLoginModal('login')
    } catch (err) {
      console.log(err)
      dispatch(SET_ERROR(err))
    }
  }
}
