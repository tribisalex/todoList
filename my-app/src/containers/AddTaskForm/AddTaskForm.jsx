import React from 'react';
import {connect} from 'react-redux';
import {addTaskActionCreator, updateNewTaskTextActionCreator} from "../../store/state/tasks/actions";
import AddTaskForm from "../../components/AddTaskForm/AddTaskForm";

const mapStateToProps = (state) => (
    {
        state: state.listTask.tasks,
        newTaskText: state.listTask.newTaskText
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