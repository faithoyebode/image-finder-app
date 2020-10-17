import { SET_AMOUNT } from "../../reduxController/actionTypes";


export function setAmount(payload){
    return {
        type: SET_AMOUNT,
        payload
    }
};