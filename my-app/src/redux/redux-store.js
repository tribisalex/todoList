import {applyMiddleware, combineReducers, createStore} from "redux";
import listReducer from './list-reducer.js';
import thunkMiddleWare from "redux-thunk";
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers ({
    listTask: listReducer,
    form: formReducer
});

let store = createStore (reducers, applyMiddleware(thunkMiddleWare));

export default store;