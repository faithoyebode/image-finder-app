import { SEARCH_IMAGES_REQUEST, SEARCH_IMAGES_SUCCESS, SEARCH_IMAGES_ERROR, CLEAR_IMAGES } from '../../reduxController/actionTypes';

const initialState = {
    images: [],
    loading: false,
    error: false
}

export default function(state = initialState, action){
    switch(action.type){
        case  SEARCH_IMAGES_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
        };

        case  SEARCH_IMAGES_SUCCESS:
            return {
                ...state,
                loading: false,
                images: action.payload,
                error: false
        };

        case  SEARCH_IMAGES_ERROR:
            return {
                ...state,
                loading: false,
                images: [],
                error: true
        };

        case CLEAR_IMAGES: 
            return {
                ...state,
                loading: false,
                images: [],
                error: false
        };

        default:
            return state;
        
    }

}