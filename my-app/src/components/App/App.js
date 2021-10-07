import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import TaskList from '../../containers/TaskList';
import store from "../../store/state";
import AddTaskFormContain from "../../containers/AddTaskFormContain/AddTaskFormContain";

const App = () => (
    <Provider store={store}>
        <div className='app-wrapper'>
            <div className='todoList'>
                <AddTaskFormContain/>
                <TaskList/>
            </div>
        </div>
    </Provider>
)

export default App;