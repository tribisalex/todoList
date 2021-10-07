import React from 'react';
import s from './AddTaskForm.module.css'

const AddTaskForm = ({NewTaskElement, onTaskChange, onAddTask, newTaskText}) => (
    <div className={s.addTaskForm}>
        <h3 className={s.addTaskText}>Мои задания</h3>
            <input type='text'
                   placeholder={'Enter new task'}
                   className={s.messageBlock}
                   ref={NewTaskElement}
                   onChange={onTaskChange}
                   value={newTaskText}
                   required/>
            <button className={s.btnAdd}
                    onKeyPress={onAddTask}
                    onClick={onAddTask}>Добавить задание</button>
    </div>
)

export default AddTaskForm;