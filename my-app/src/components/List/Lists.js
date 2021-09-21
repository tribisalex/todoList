import React from 'react';
import List from "../ListPost/List.js";
import s from './Lists.module.css'
import List1 from "../ListPost/List1";

const Lists = (props) => {
    let taskElement = props.tasks.map(p => <List1 message={p.message}/>);

    let NewTaskElement = React.createRef();

    let onAddTask = () => {
        props.addTask();
    }

    let onTaskChange = () => {
        let text = NewTaskElement.current.value;
        props.updateNewTaskText(text);
    }

    return (
        <div>
            <div>
                <h3>Мои задания</h3>
                <div className={s.tasks}>
                    <textarea placeholder={'Enter new task'}
                              className={s.MessageBlock}
                              ref={NewTaskElement}
                              onChange={onTaskChange}
                              value={props.newTaskText}/>
                    <button onClick={onAddTask} className={s.btnAdd}>Добавить задание</button>
                </div>
                <div>
                    {taskElement}
                </div>
            </div>
        </div>
    )
}

export default Lists;