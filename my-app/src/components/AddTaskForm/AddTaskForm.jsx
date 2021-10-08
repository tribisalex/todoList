import React from 'react';
import s from './AddTaskForm.module.css'

const AddTaskForm = ({handleChangeValue, handleAddTask, value}) => (
    <div className={s.addTaskForm}>
        <h3 className={s.addTaskText}>Мои задания</h3>
        <input type='text'
               value={value}
               onChange={handleChangeValue}
               placeholder={'Enter new task'}
               className={s.messageBlock}
               required/>
        <button className={s.btnAdd}
                onClick={handleAddTask}>Добавить задание
        </button>
    </div>
)

export default AddTaskForm;