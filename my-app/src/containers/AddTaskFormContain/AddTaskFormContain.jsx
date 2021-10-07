import React from 'react';
import {connect} from 'react-redux';
import {addTaskActionCreator, updateNewTaskTextActionCreator} from "../../store/state/tasks/actions";
import AddTaskForm from "../../components/AddTaskForm/AddTaskForm";

const mapStateToProps = (state) => (
    {
        state: state.TaskList.tasks,
        newTaskText: state.TaskList.newTaskText
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        addTask: () => dispatch(addTaskActionCreator()),
        updateNewTaskText: (text) => dispatch(updateNewTaskTextActionCreator(text))
    }
)

const AddTaskFormContain = ({addTask, updateNewTaskText, newTaskText}) => {

    const NewTaskElement = React.createRef();

    const onAddTask = () => {
        addTask();
    }

    const onTaskChange = () => {
        updateNewTaskText(NewTaskElement.current.value);
    }
    return (
        <>
            <AddTaskForm onAddTask={onAddTask}
                         onTaskChange={onTaskChange}
                         NewTaskElement={NewTaskElement}
                         newTaskText={newTaskText}
            />
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTaskFormContain);