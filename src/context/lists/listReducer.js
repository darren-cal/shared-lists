import { GET_LISTS } from '../types';

export default (state, action) => {
    switch(action.type) {
        case GET_LISTS:
            return {
                ...state,
                lists: action.payload
            }
        default:
            return state;
    }
};