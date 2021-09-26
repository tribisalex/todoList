import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleWare from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import TaskReducer from "../components/store/state/tasks/actions";

let reducers = combineReducers ({
    listTask: TaskReducer,
    form: formReducer
});

let store = createStore (reducers, applyMiddleware(thunkMiddleWare));

export default store;