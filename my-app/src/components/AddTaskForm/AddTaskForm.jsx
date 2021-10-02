import React from 'react';
import s from './AddForm.module.css'

const AddTaskForm = ({NewTaskElement, onTaskChange, onAddTask, newTaskText}) => (
    <div className={s.addTaskForm}>
        <h3 className={s.addTaskText}>Мои задания</h3>
            <input type='text'
                   placeholder={'Enter new task'}
                   className={s.messageBlock}
                   ref={NewTaskElement}
                   onChange={onTaskChange}
                   value={newTaskText}/>
            <button onClick={onAddTask} className={s.btnAdd}>Добавить задание</button>
    </div>
)

export default AddTaskForm;