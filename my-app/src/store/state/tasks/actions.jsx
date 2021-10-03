import {ADD_TASK, DELETE_TASK, TASK_MARKED, UPDATE_NEW_TASK_TEXT} from '../../types';

export const deleteTaskActionCreator = (id) => ({type: DELETE_TASK, id: id});
export const isTaskMarkedActionCreator = (id) => ({type: TASK_MARKED, id: id});
export const addTaskActionCreator = () => ({type: ADD_TASK});
export const updateNewTaskTextActionCreator = (text) => ({type: UPDATE_NEW_TASK_TEXT, newText: text});