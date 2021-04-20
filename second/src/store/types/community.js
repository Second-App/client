/** @format */

export const SET_COMMUNITY = (payload) => {
    return {
        type: 'setCommunity/community',
        payload,
    };
};

export const ADD_COMMUNITY = (payload) => {
    return {
        type: 'addCommunity/community',
        payload,
    };
};

export const REMOVE_ONE_COMMUNITY = (payload) => {
    return {
        type: 'removeOne/community',
        payload,
    };
};
