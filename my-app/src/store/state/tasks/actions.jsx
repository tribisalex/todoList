import {ADD_TASK, DELETE_TASK, LINE_THROUGH_TASK, NO_LINE_THROUGH_TASK, UPDATE_NEW_TASK_TEXT} from '../../types';

export const deleteTaskActionCreator = () => ({type: DELETE_TASK})
export const lineThroughTaskActionCreator = () => ({type: LINE_THROUGH_TASK})
export const noLineThroughTaskActionCreator = () => ({type: NO_LINE_THROUGH_TASK})
export const addTaskActionCreator = () => ({type: ADD_TASK})
export const updateNewTaskTextActionCreator = (text) => ({type: UPDATE_NEW_TASK_TEXT, newText: text})