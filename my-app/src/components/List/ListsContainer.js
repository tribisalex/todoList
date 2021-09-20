import React from 'react';
import {addTaskActionCreator, updateNewTaskTextActionCreator} from '../../redux/list-reducer';
import {connect} from "react-redux";
import Lists from "./Lists";

const mapStateToProps = (state) => {
    return {
        tasks: state.listTask.tasks,
        newTaskText: state.listTask.newTaskText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewTaskText: (text) => {
          let action = updateNewTaskTextActionCreator(text);
          dispatch(action);
        },
        addTask: () => (dispatch(addTaskActionCreator()))
    }
}

const ListsContainer = connect(mapStateToProps, mapDispatchToProps)(Lists);

export default ListsContainer;