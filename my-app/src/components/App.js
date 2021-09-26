import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from '../redux/redux-store';
import TaskList from './containers/TaskList';
import AddTaskForm from './AddTask/AddTaskForm';

const App = () => (
    <Provider store={store}>
        <h3>Мои задания</h3>
        <AddTaskForm/>
        <TaskList/>
    </Provider>
)

export default App;
