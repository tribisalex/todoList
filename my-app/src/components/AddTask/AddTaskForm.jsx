import React from 'react';
import s from "../Task/TaskList.module.css";

const AddTaskForm = ({addTask, updateNewTaskText, newTaskText}) => {

    const NewTaskElement = React.createRef();

    const onAddTask = () => {
        addTask();
    }

    const onTaskChange = () => {
        updateNewTaskText(NewTaskElement.current.value);
    }

    return (
        <div className={s.tasks}>
                    <textarea placeholder={'Enter new task'}
                              className={s.MessageBlock}
                              ref={NewTaskElement}
                              onChange={onTaskChange}
                              value={newTaskText}/>
            <button onClick={onAddTask} className={s.btnAdd}>Добавить задание</button>
        </div>
    )
}

export default AddTaskForm;