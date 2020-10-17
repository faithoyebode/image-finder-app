import { all } from 'redux-saga/effects';
import getImagesWatcher from '../components/search/getImagesSaga';

export default function* rootsaga(){
    yield all ([
        getImagesWatcher()   
    ]);
}