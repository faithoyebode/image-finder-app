import React from 'react';
import { useDispatch } from 'react-redux';
import { setChosenImage,  openDialog } from '../modal/chosenImageActions';

const ImageResult = ({ images }) => {
    const dispatch = useDispatch();
    const handleOpen = (imgURL) => {
        dispatch(setChosenImage(imgURL));
        dispatch(openDialog());
    }

    return (
        <div className="image-results">
            {images.map(
                image => (
                    <div key={image.id} className="each-image" onClick={(e) => {handleOpen(image.largeImageURL)}}>
                        <img src={image.largeImageURL} alt="" />
                        <div class="overlay">
                            <div class="text">{image.tags}</div>
                        </div>
                    </div>)
            )}
        </div>
    )
}

export default ImageResult;
