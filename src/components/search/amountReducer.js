import {  SET_AMOUNT } from "../../reduxController/actionTypes";

const initialState = {
    amount: "15"
}

export default function(state = initialState, action){
    switch(action.type){
        case  SET_AMOUNT:
            return {
                ...state,
                amount: action.payload
        };

        default:
            return state;
        
    }

}