import React, { useContext, useEffect } from 'react';
import ListItem from './ListItem';
import ListContext from '../../context/lists/listContext';

const Lists = () => {
    const listContext = useContext(ListContext);

    const { lists, getLists } = listContext;

    useEffect(() => {
        getLists();
    }, [])

    return (
        <ul className="collection">
            {lists && lists.map(list => <ListItem key={list.id} list={list} />)}
        </ul>
    )
}

export default Lists;
