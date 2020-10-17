import { SET_SEARCH_TEXT, CLEAR_IMAGES } from "../../reduxController/actionTypes";


export function setSearchText(payload){
    return {
        type: SET_SEARCH_TEXT,
        payload
    }
};

export function clearImages(){
    return {
        type: CLEAR_IMAGES
    }
};