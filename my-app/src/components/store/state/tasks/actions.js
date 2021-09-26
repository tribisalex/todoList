import {ADD_TASK, DELETE_TASK, LINE_THROUGH_TASK, NO_LINE_THROUGH_TASK, UPDATE_NEW_TASK_TEXT} from "../types";

const initialState = {
    tasks: [
        {id: 1, message: 'My first task'},
        {id: 2, message: 'Показать созданный ToDo ментору'},
    ],
    newTaskText: '',
    profile: null,
    status: ''
};

const TaskReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TASK: {
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

        case UPDATE_NEW_TASK_TEXT: {
            return {
                ...state,
                newTaskText: action.newText
            };
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

export const addTaskActionCreator = () => ({type: ADD_TASK})
export const deleteTaskActionCreator = () => ({type: DELETE_TASK})
export const updateNewTaskTextActionCreator = (text) => ({type: UPDATE_NEW_TASK_TEXT, newText: text})
export const lineThroughTaskActionCreator = () => ({type: LINE_THROUGH_TASK})
export const noLineThroughTaskActionCreator = () => ({type: NO_LINE_THROUGH_TASK})

export default TaskReducer;