import { GET_LISTS, ADD_LIST } from '../types';

export default (state, action) => {
    switch(action.type) {
        case GET_LISTS:
            return {
                ...state,
                lists: action.payload
            };
        case ADD_LIST:
            return {
                ...state,
                lists: [action.payload, ...state.lists]
            };
        default:
            return state;
    }
};