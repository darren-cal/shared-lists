import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ list }) => {
    const { title, items } = list;

    return (
        <li className="collection-item avatar">
            <i className="material-icons circle pink">list</i>
            <span className="title">{title}</span>
            <p className="grey-text">
                {items.map((item, i) => i === 0 ? item : `, ${item}`)}
            </p>
            <span className="secondary-content">0/{items.length}</span>
        </li>
    )
}

ListItem.propTypes = {
    list: PropTypes.object.isRequired,
}

export default ListItem;
