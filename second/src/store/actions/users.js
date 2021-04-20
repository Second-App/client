import axios from '../../axios';
import { SET_LOGGED_USER, SET_ERROR, GET_PROFILE_BY_ID } from '../types';

export function userLogin(payload, closeModal, setIsLogin, toast) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post('/users/login', payload);
      await dispatch(SET_LOGGED_USER(data));
      localStorage.setItem('access_token', data.access_token);
      localStorage.setItem('id', data.id);
      localStorage.setItem('name', data.name);
      setIsLogin(true);
      closeModal();
      toast.success('success');
    } catch (err) {
      toast.error('Invalid Email or Password', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
}

export function userRegister(payload, closeModal, openLoginModal, toast) {
  return async (dispatch) => {
    try {
      await axios.post('/users/register', payload);
      closeModal();
      openLoginModal('login');
      toast.success('Register success');
    } catch (err) {
      toast.error(`${err.response.data.msg}`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
}

export function getProfileById(id) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/users/' + id, {
        headers: { access_token: localStorage.access_token },
      });
      // console.log(data)
      await dispatch(GET_PROFILE_BY_ID(data));
    } catch (err) {
      console.log(err);
      dispatch(SET_ERROR(err));
    }
  };
}

export function editProfile(payload, id) {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        url: `/users/${Number(id)}`,
        method: 'put',
        headers: { access_token: localStorage.access_token },
        data: payload,
      });
      
      await dispatch(SET_LOGGED_USER(payload));
    } catch (err) {
      await dispatch(SET_ERROR(err));
    }
  };
}
