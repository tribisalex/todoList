import {combineReducers, createStore} from 'redux';
import {reducer as formReducer} from 'redux-form';
import TaskReducer from "./tasks";

const reducers = combineReducers({
    TaskList: TaskReducer,
    form: formReducer
});

const store = createStore(reducers);

export default store;