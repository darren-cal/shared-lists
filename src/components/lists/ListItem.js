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
            <span className="secondary-content grey-text text-darken-3">
                <i className="material-icons">more_vert</i>
            </span>
            <p className="teal-text">0/{items.length}</p>
        </li>
    )
}

ListItem.propTypes = {
    list: PropTypes.object.isRequired,
}

export default ListItem;
