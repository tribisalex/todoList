import {ADD_TASK, EDIT_TASK, DELETE_TASK, TASK_MARKED, SAVE_TASK} from '../../types';

export const deleteTaskActionCreator = (id) => ({type: DELETE_TASK, id: id});
export const editTaskActionCreator = (id) => ({type: EDIT_TASK, id: id});
export const saveTaskActionCreator = (id, message) => ({type: SAVE_TASK, id: id, message: message});
export const isTaskMarkedActionCreator = (id) => ({type: TASK_MARKED, id: id});
export const addTaskActionCreator = (text) => ({type: ADD_TASK, newText: text});