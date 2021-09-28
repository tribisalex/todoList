import {combineReducers, createStore} from 'redux';
import {reducer as formReducer} from 'redux-form';
import TaskReducer from './tasks/actions';
import AddTaskFormReducer from "./addTaskForm/actions";

const reducers = combineReducers ({
    listTask: TaskReducer,
    addTask: AddTaskFormReducer,
    form: formReducer
});

const store = createStore (reducers);

export default store;