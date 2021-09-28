import {ADD_TASK, DELETE_TASK, LINE_THROUGH_TASK, NO_LINE_THROUGH_TASK, UPDATE_NEW_TASK_TEXT} from '../../types';

const initialState = {
    tasks: [
        {id: 1, message: 'My first task'},
        {id: 2, message: 'Показать созданный ToDo ментору'},
    ],
    newTaskText: ''
};

const TaskReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TASK:
        {
            let newTask = {
                id: 3,
                message: state.newTaskText
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

        case LINE_THROUGH_TASK: {
            return {
                ...state
            }
        };

        case NO_LINE_THROUGH_TASK: {
            return {
                ...state
            }
        };

        case DELETE_TASK: {
            return {
                ...state
            }
        };

        default:
            return state;
    }
};

export default TaskReducer;