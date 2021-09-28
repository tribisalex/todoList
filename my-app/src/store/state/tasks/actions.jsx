import {DELETE_TASK, LINE_THROUGH_TASK, NO_LINE_THROUGH_TASK} from '../../types';

const initialState = {
    tasks: [
        {id: 1, message: 'My first task'},
        {id: 2, message: 'Показать созданный ToDo ментору'},
    ],
    newTaskText: ''
};

const TaskReducer = (state = initialState, action) => {

    switch (action.type) {
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

export const deleteTaskActionCreator = () => ({type: DELETE_TASK})
export const lineThroughTaskActionCreator = () => ({type: LINE_THROUGH_TASK})
export const noLineThroughTaskActionCreator = () => ({type: NO_LINE_THROUGH_TASK})

export default TaskReducer;