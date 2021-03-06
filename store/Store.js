import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { applyMiddleware, combineReducers, createStore } from "redux"
import thunkMiddleware from "redux-thunk";
import {
    loginReducer
} from './reducers/authReducer';


const bindMiddleware = (middleware) =>{
    if(process.env.NODE_ENV ===! 'production'){
        const {composeWithDevTools} = require('redux-devtools-extension');
        return composeWithDevTools(applyMiddleware(middleware));
    };
    return applyMiddleware(middleware);
};

const reducers = combineReducers({
    login:loginReducer,
});

const reducer = (state, action) =>{
    if(action.type === HYDRATE){
        const nextState = {
            ...state,
            ...action.payload
        };
        return nextState;
    }else{
        return reducers(state, action);
    }
}


const initStore = () => {
    return createStore(reducer, bindMiddleware(thunkMiddleware));
}

export const wrapper = createWrapper(initStore);