import React from 'react';
import s from './AddForm.module.css'

const AddTaskForm = (props) => {
    const NewTaskElement = React.createRef();

    const onAddTask = () => {
        props.addTask();
    }

    const onTaskChange = () => {
        props.updateNewTaskText(NewTaskElement.current.value);
    }

    return (
        <div className={s.tasks}>
                    <textarea placeholder={'Enter new task'}
                              className={s.MessageBlock}
                              ref={NewTaskElement}
                              onChange={onTaskChange}
                              value={props.newTaskText}/>
            <button onClick={onAddTask} className={s.btnAdd}>Добавить задание</button>
        </div>
    )
}

export default AddTaskForm;