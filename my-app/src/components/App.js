import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import TaskList from '../containers/TaskList';
import AddTaskForm from '../containers/AddTaskForm';
import store from "../store/state";

const App = () => (
    <Provider store={store}>
        <h3>Мои задания</h3>
        <AddTaskForm/>
        <TaskList/>
    </Provider>
)

export default App;