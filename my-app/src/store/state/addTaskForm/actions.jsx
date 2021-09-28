import {ADD_TASK, UPDATE_NEW_TASK_TEXT} from '../../types';

const initialState = {

};

const AddTaskFormReducer = (state = initialState, action) => {

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

        case UPDATE_NEW_TASK_TEXT: {
            return {
                ...state,
                newTaskText: action.newText
            };
        };

        default:
            return state;
    }
};

export const addTaskActionCreator = () => ({type: ADD_TASK})
export const updateNewTaskTextActionCreator = (text) => ({type: UPDATE_NEW_TASK_TEXT, newText: text})

export default AddTaskFormReducer;