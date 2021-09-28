import React from 'react';
import {connect} from 'react-redux';
import {deleteTaskActionCreator,lineThroughTaskActionCreator,noLineThroughTaskActionCreator} from "../../store/state/tasks/actions";
import Task from "../../components/Task/Task";


const mapStateToProps = (state) => (
    {
        tasks: state.TaskList.tasks,
        newTaskText: state.TaskList.newTaskText
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        deleteTask: () => (dispatch(deleteTaskActionCreator())),
        lineThroughTask: () => (dispatch(lineThroughTaskActionCreator())),
        noLineThroughTask: () => (dispatch(noLineThroughTaskActionCreator())),
    }
)

const TaskList = ({tasks}) => (
    <div>
        <div>
            {tasks.map((task) => <Task message={task.message}/>)}
        </div>
    </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);