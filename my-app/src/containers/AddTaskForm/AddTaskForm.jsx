import React from 'react';
import {connect} from 'react-redux';
import {addTaskActionCreator, updateNewTaskTextActionCreator} from '../../store/state/addTaskForm/actions';
import AddTaskForm from "../../components/AddTaskForm/AddTaskForm";

const mapStateToProps = (state) => (
    {
        state: state.addTask.tasks,
        newTaskText: state.addTask.newTaskText
    }
)

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: () => (dispatch(addTaskActionCreator())),
        updateNewTaskText: (text) => {
            dispatch(updateNewTaskTextActionCreator(text));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTaskForm);