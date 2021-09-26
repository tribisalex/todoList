import {combineReducers, createStore} from 'redux';
import { reducer as formReducer } from 'redux-form';
import TaskReducer from './actions';

const reducers = combineReducers ({
    listTask: TaskReducer,
    form: formReducer
});

let store = createStore (reducers);

export default store;