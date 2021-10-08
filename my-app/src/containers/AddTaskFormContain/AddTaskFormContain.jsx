import React, {useCallback, useState} from 'react';
import {connect} from 'react-redux';
import {addTaskActionCreator} from "../../store/state/tasks/actions";
import AddTaskForm from "../../components/AddTaskForm/AddTaskForm";

const mapStateToProps = (state) => (
    {
        state: state.TaskList.tasks,
        newTaskText: state.TaskList.newTaskText
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        addTask: (text) => dispatch(addTaskActionCreator(text))
    }
)

const AddTaskFormContain = ({addTask}) => {

    const [value, setValue] = useState('');

    const handleChangeValue = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    const handleAddTask = (e) => {
        e.preventDefault();

        addTask(value);
        setValue('');
    }

    return (
        <>
            <AddTaskForm handleAddTask={handleAddTask}
                         value={value}
                         handleChangeValue={handleChangeValue}
            />
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTaskFormContain);