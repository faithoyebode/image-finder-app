import { SET_SEARCH_TEXT } from "../../reduxController/actionTypes";

const initialState = {
    searchText: ""
}

export default function(state = initialState, action){
    switch(action.type){
        case SET_SEARCH_TEXT:
            return {
                ...state,
                searchText: action.payload
        };

        default:
            return state;
        
    }

}