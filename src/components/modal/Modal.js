import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeDialog } from './chosenImageActions';

function Modal() {
    const dispatch = useDispatch();
    const chosenImage = useSelector(state => state.chosenImage.image);
    

    return (
        <div className="modal">
            <div className="modal-content">
                <img src={chosenImage} alt='' />
                <p onClick={(e) => {dispatch(closeDialog())}} className="close-btn">close</p>
            </div>
        </div>
    )
}

export default Modal;
