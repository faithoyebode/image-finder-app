import { takeLatest, put, select } from 'redux-saga/effects';
import { SET_SEARCH_TEXT, SEARCH_IMAGES_REQUEST, SEARCH_IMAGES_SUCCESS } from '../../reduxController/actionTypes';
import { searchText, amount } from '../../reduxController/selectors';
import axios from 'axios';


function* getImages(){
    yield put({ type: SEARCH_IMAGES_REQUEST });
    let text = yield select(searchText);
    let imageAmount = yield select(amount);
    console.log(text);
    try {
        const result = yield axios.get(
            `${process.env.REACT_APP_API_URL}/?key=${process.env.REACT_APP_API_KEY}&q=${text}&image_type=photo&per_page=${imageAmount}&safesearch=true`
        );
        
        yield put({ type: SEARCH_IMAGES_SUCCESS, payload: result.data.hits });
    } catch (err) {
        console.log(err);
        // if (err.response.data.mesage) {
        //     yield put({ type: SEARCH_IMAGES_ERROR, payload: err.response.data.mesage });
        // }

    }
}

export default function* getImagesWatcher() {
    yield takeLatest(SET_SEARCH_TEXT, getImages);
}