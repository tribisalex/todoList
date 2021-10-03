import {ADD_TASK, DELETE_TASK, TASK_MARKED, UPDATE_NEW_TASK_TEXT} from '../../types';

const initialState = {
    tasks: [
        {id: 1, message: 'My first task', done: false},
        {id: 2, message: 'Показать созданный ToDo ментору', done: false},
        {id: 3, message: 'Task a tree', done: true},
    ],
    newTaskText: ''
};

const TaskReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TASK:
        {
            let newTask = {
                id: Date.now(),
                message: state.newTaskText,
                done: false
            };
            return {
                ...state,
                tasks: [...state.tasks, newTask],
                newTaskText: ''
            };
        }

        case UPDATE_NEW_TASK_TEXT: {
            return {
                ...state,
                newTaskText: action.newText
            };
        };

        case TASK_MARKED: {
            return {
                ...state,
                tasks: state.tasks.map((task) => task.id === action.id ? { ...task, done: !task.done} : task)
            };
        };

        case DELETE_TASK: {
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.id)
                    }
                }

        default:
            return state;
    }
};

export default TaskReducer;