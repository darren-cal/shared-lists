import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import listReducer from './listReducer';
import ListContext from './listContext';
import { GET_LISTS } from '../types';

const ListState = props => {
    const initialState = {
        lists: null
    };

    const [state, dispatch] = useReducer(listReducer, initialState);

    const getLists = () => {
        const mockLists = [
            {
                id: uuidv4(), 
                title: 'Groceries', 
                items: ['Cheese', 'Eggs', 'Apple', 'Bread']
            },
            {
                id: uuidv4(), 
                title: 'Construction Stuff', 
                items: ['Nails', 'Screws', 'Sand', 'Cement', 'Blocks', 'Lumber']
            },
        ];

        dispatch({
            type: GET_LISTS,
            payload: mockLists
        });
    }

    return (
        <ListContext.Provider
            value={{
                lists: state.lists,
                getLists
            }}
        >
            {props.children}
        </ListContext.Provider>
    )
}

export default ListState;