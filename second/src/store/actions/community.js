/** @format */

import axios from '../../axios';
import { SET_COMMUNITY, ADD_COMMUNITY, REMOVE_ONE_COMMUNITY, REMOVE_PRODUCT } from '../types';
import { toast } from 'react-toastify';

export function changeOwner(newUserId, ProductId, id, productName) {
    console.log(newUserId, ProductId, 'oo ini dia dr client ,<<<<<<<<<<<<<<<<<<<<');
    return async (dispatch) => {
        try {
            const { data } = await axios({
                method: 'PATCH',
                url: '/community',
                data: {
                    newUserId,
                    ProductId,
                    id,
                },
                headers: {
                    access_token: localStorage.access_token,
                },
            });
            console.log(data, 'ini dari actions ');
            await dispatch(REMOVE_PRODUCT(data[0]));
            await dispatch(REMOVE_ONE_COMMUNITY({ id }));
            toast.success(`Successfully give ${productName}`);
        } catch (err) {
            console.log(err);
            toast.error(err.msg);
        }
    };
}

export function fetchCommunity() {
    return async (dispatch) => {
        try {
            const { data } = await axios({
                method: 'GET',
                url: '/community',
                headers: {
                    access_token: localStorage.access_token,
                },
            });
            console.log(data);
            dispatch(SET_COMMUNITY(data));
        } catch (err) {
            console.log(err);
            toast.error(err.msg);
        }
    };
}

export function addCommunity(payload) {
    console.log(payload, 'isdnfasdfo');
    return async (dispatch) => {
        try {
            const { data } = await axios({
                method: 'POST',
                url: '/community',
                headers: {
                    access_token: localStorage.access_token,
                },
                data: payload,
            });
            console.log(data);
            await dispatch(ADD_COMMUNITY(data));
            toast.success(`Successfully requested the item`);
        } catch (err) {
            console.log(err);
        }
    };
}

export function removeOneCommunity(id) {
    return async (dispatch) => {
        try {
            const { data } = await axios({
                method: 'DELETE',
                url: '/community/' + id,
                headers: {
                    access_token: localStorage.access_token,
                },
            });
            console.log(data);
            await dispatch(
                REMOVE_ONE_COMMUNITY({
                    id,
                })
            );
            toast.success(data.msg);
        } catch (err) {
            console.log(err);
            toast.error(err.msg);
        }
    };
}
