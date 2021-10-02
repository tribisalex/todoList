import React from 'react';
import {connect} from 'react-redux';
import {deleteTaskActionCreator, isTaskMarkedActionCreator} from "../../store/state/tasks/actions";
import Task from "../../components/Task/Task";

const mapStateToProps = (state) => (
    {
        tasks: state.TaskList.tasks,
        newTaskText: state.TaskList.newTaskText,
        isTaskMarked: state.TaskList.isTaskMarked
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        deleteTask: () => (dispatch(deleteTaskActionCreator())),
        taskMarked: (id) => {dispatch(isTaskMarkedActionCreator(id));
        }
    }
)

const TaskList = (props) => {

    const taskMarked = (id) => {
        props.taskMarked(id);
    }

    const deleteTask = (name) => {
        props.deleteTask(name);
    }

    return (
    <div>
        <div>
            {props.tasks.map((task) => <Task message={task.message}
                                             taskMarked={taskMarked}
                                             deleteTask={deleteTask}
                                             id={task.id}
                                             done={task.done}
            />)}
        </div>
    </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskList);