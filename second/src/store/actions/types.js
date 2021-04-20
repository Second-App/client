/** @format */

import axios from '../../axios';
import { SET_T_TYPES, SET_ONE_T_TYPE, SET_LOADING, SET_ERROR } from '../types';

export function fetchTypes() {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('/types');
            await dispatch(SET_T_TYPES(data));
            await dispatch(SET_LOADING(false));
        } catch (err) {
            console.log(err);
            dispatch(SET_ERROR(err));
        }
    };
}

export function getOneType(id) {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('/types/' + id);
            await dispatch(SET_ONE_T_TYPE(data));
<<<<<<< HEAD
            // console.log(data, '<<< dataaaa');
=======
>>>>>>> 5d6b9dc7681fda8345ad34488db1bf0110857e4e
            await dispatch(SET_LOADING(false));
        } catch (err) {
            console.log(err);
            dispatch(SET_ERROR(err));
        }
    };
}
