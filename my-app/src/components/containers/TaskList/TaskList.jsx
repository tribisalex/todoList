import React from 'react';
import {connect} from 'react-redux';
import {
    addTaskActionCreator,
    deleteTaskActionCreator, lineThroughTaskActionCreator, noLineThroughTaskActionCreator,
    updateNewTaskTextActionCreator
} from "../../store/state/tasks/actions";
import Task from "../../Task/Task";

const TaskList1 = ({tasks}) => (
    <div>
        <div>
            {tasks.map((task) => <Task message={task.message}/>)}
        </div>
    </div>
)

const mapStateToProps = (state) => {
    return {
        tasks: state.listTask.tasks,
        newTaskText: state.listTask.newTaskText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewTaskText: (text) => {
            dispatch(updateNewTaskTextActionCreator(text));
        },
        addTask: () => (dispatch(addTaskActionCreator())),
        deleteTask: () => (dispatch(deleteTaskActionCreator())),
        lineThroughTask: () => (dispatch(lineThroughTaskActionCreator())),
        noLineThroughTask: () => (dispatch(noLineThroughTaskActionCreator())),
    }
}

const TaskList = connect(mapStateToProps, mapDispatchToProps)(TaskList1);

export default TaskList;