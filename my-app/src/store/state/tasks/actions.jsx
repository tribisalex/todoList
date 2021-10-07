import {ADD_TASK, EDIT_TASK, DELETE_TASK, TASK_MARKED, UPDATE_NEW_TASK_TEXT, SAVE_TASK} from '../../types';

export const deleteTaskActionCreator = (id) => ({type: DELETE_TASK, id: id});
export const editTaskActionCreator = (id) => ({type: EDIT_TASK, id: id});
export const saveTaskActionCreator = (id, message) => ({type: SAVE_TASK, id: id, message: message});
export const isTaskMarkedActionCreator = (id) => ({type: TASK_MARKED, id: id});
export const addTaskActionCreator = () => ({type: ADD_TASK});
export const updateNewTaskTextActionCreator = (text) => ({type: UPDATE_NEW_TASK_TEXT, newText: text});