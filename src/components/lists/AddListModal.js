import React, { useState, useContext } from 'react';
import ListContext from '../../context/lists/listContext';
import M from 'materialize-css/dist/js/materialize.min.js';

const CreateListModal = () => {
    const listContext = useContext(ListContext);

    const [title, setTitle] = useState('');

    const onSubmit = () => {
        if(title === '') {
            M.toast({ html: 'Please enter a title' });
        } else {
            listContext.addList(title);

            setTitle('');

            M.toast({ html: `${title} created` });
        }
    }

    return (
        <div id="create-list-modal" className="modal">
            <div className="modal-content">
                <h4>New List</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)}/>
                        <label htmlFor="title" className="active">Title</label>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!" className="modal-close waves-effect waves-light btn green" onClick={onSubmit}>Create</a>
                <a href="#!" className="modal-close waves-effect waves-light btn-flat red-text left">Cancel</a>
            </div>
        </div>
    )
}

export default CreateListModal;
