import React from 'react';

const CreateListButton = () => {
    return (
        <div className="right-align">
            <a href="#create-list-modal" className="waves-effect waves-light btn green modal-trigger">
                <i className="material-icons left">add</i> Create
            </a>
        </div>
    )
}

export default CreateListButton;
