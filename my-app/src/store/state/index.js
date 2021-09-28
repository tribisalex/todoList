import {combineReducers, createStore} from 'redux';
import {reducer as formReducer} from 'redux-form';
import TaskReducer from "./tasks";

const reducers = combineReducers({
    listTask: TaskReducer,
    form: formReducer
});

const store = createStore(reducers);

export default store;