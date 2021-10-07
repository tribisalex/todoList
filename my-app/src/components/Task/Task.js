import React from 'react';
import styles from "./Task.module.css";
import kor from '../../assets/kor.png'
import changed from '../../assets/change.png'
import classNames from 'classnames/bind';
import {valueMock} from "redux-form/lib/util/eventMocks";

const cx = classNames.bind(styles);

const Task = ({done, taskMarked, id, change, message, deleteTask, NewTaskElement, saveTask, editTask, newTaskText, onTaskChange}) => {
    console.log(change)
    return (
        <li className={cx('list_item', {'list_item_done': done})}>

            <div className={styles.task}>
                <input type='checkbox'
                       className={styles.list_item_checkbox}
                       checked={done}
                       onChange={() => taskMarked(id)}/>
                {!change &&
                <span className={styles.listItemSpan}>{message}</span>
                }
                {change &&
                <input type='text'
                       defaultValue={message}
                       value={NewTaskElement}
                       onChange={onTaskChange}
                       ref={NewTaskElement}
                       onBlur={() => saveTask(id, NewTaskElement.value)}
                       autoFocus={true}/>
                }
            </div>

            <img className={styles.listItemDeleteBtn}
                 alt='deleteButton'
                 onClick={() => deleteTask(id)}
                 src={kor}/>
            <img className={styles.listItemChangeBtn}
                 alt='deleteButton'
                 onClick={() => editTask(id)}
                 src={changed}/>
        </li>
    )
};

export default Task;