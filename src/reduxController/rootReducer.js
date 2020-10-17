import { combineReducers } from 'redux';
import searchTextReducer from '../components/search/searchTextReducer';
import amountReducer from '../components/search/amountReducer';
import imagesReducer from '../components/search/imagesReducer';
import chosenImageReducer from '../components/modal/chosenImageReducer';


// import videos from './videoReducer';


const rootReducer = combineReducers({
    userSearchText: searchTextReducer,
    userAmount: amountReducer,
    getImages: imagesReducer,
    chosenImage: chosenImageReducer
});

export default rootReducer;