import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import TaskList from '../containers/TaskList';
import AddTaskForm from '../containers/AddTaskFormContain';
import store from "../store/state";

const App = () => (
    <Provider store={store}>
        <div className='app-wrapper'>
            <div className='todoList'>
                <AddTaskForm/>
                <TaskList/>
            </div>
        </div>
    </Provider>
)

export default App;