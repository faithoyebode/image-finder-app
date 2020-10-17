import { SET_CHOSEN_IMAGE, OPEN_DIALOG, CLOSE_DIALOG } from "../../reduxController/actionTypes";


export function setChosenImage(payload){
    return {
        type: SET_CHOSEN_IMAGE,
        payload
    }
};

export function openDialog(){
    return {
        type: OPEN_DIALOG
    }
};

export function closeDialog(){
    return {
        type: CLOSE_DIALOG
    }
};