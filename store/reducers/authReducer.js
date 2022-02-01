import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from '../constants/authConstants';


const initialState = {
    login:false,
    loading: false,
    error:false
}

export const loginReducer = (state = initialState, action) =>{
    switch(action.type){
        default:
            return state;
    }
}