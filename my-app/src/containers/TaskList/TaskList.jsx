import React, {useCallback, useState} from 'react';
import {connect} from 'react-redux';
import {
    deleteTaskActionCreator, editTaskActionCreator,
    isTaskMarkedActionCreator, saveTaskActionCreator
} from "../../store/state/tasks/actions";
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
        deleteTask: (id) => dispatch(deleteTaskActionCreator(id)),
        editTask: (id) => dispatch(editTaskActionCreator(id)),
        saveTask: (id, message) => dispatch(saveTaskActionCreator(id, message)),
        taskMarked: (id) => dispatch(isTaskMarkedActionCreator(id))
    }
)

const TaskList = ({taskMarked, deleteTask, tasks, saveTask, editTask}) => {

   const [value, setValue] = useState('');

   const handleChangeValue = useCallback((e) => {
        setValue(e.target.value);
    },[]);

   const handleSaveTask = (e) => {
        e.preventDefault();
        saveTask(Number(e.target.id), value);
        setValue('');
    }

   const onTaskMarked = (id) => {
        taskMarked(id);
    }

   const onDeleteTask = (id) => {
        deleteTask(id);
    }

   const onEditTask = (id, message) => {
       setValue(message);
       editTask(id);
    }

   return (
        <div>
            <div>
                {tasks
                    .sort((a,b) => a.done - b.done)
                    .map((task) => <Task taskMarked={onTaskMarked}
                                         handleChangeValue={handleChangeValue}
                                         handleSaveTask={handleSaveTask}
                                         value={value}
                                         deleteTask={onDeleteTask}
                                         editTask={onEditTask}
                                         id={task.id}
                                         message={task.message}
                                         change={task.change}
                                         done={task.done}
                />)}
            </div>
        </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskList);