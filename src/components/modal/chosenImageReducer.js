import { SET_CHOSEN_IMAGE, OPEN_DIALOG, CLOSE_DIALOG } from "../../reduxController/actionTypes";

const initialState = {
    image: "",
    dialog: false
}

export default function(state = initialState, action){
    switch(action.type){
        case SET_CHOSEN_IMAGE:
            return {
                ...state,
                image: action.payload
        };

        case OPEN_DIALOG:
            return {
                ...state,
                dialog: true
        };

        case CLOSE_DIALOG:
            return {
                ...state,
                dialog: false
        };

        default:
            return state;
        
    }

}