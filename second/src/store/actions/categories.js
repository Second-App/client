/** @format */

import axios from '../../axios';
import { SET_CATEGORIES, SET_ONE_CATEGORY, SET_ERROR, SET_LOADING } from '../types';

export function fetchCategories() {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('/categories');
            console.log(data);
            dispatch(SET_CATEGORIES(data));
            dispatch(SET_LOADING(false));
        } catch (err) {
            console.log(err);
            dispatch(SET_ERROR(err));
        }
    };
}

export function getOneCategory(id) {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('/categories/' + id);
            dispatch(SET_ONE_CATEGORY(data));
            dispatch(SET_LOADING(false));
        } catch (err) {
            console.log(err);
            dispatch(SET_ERROR(err));
        }
    };
}
