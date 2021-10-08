import React from 'react';
import styles from "./Task.module.css";
import kor from '../../assets/kor.png'
import changed from '../../assets/change.png'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Task = ({handleChangeValue, handleSaveTask, value, done, taskMarked, id, change, message, deleteTask, editTask}) => {
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
                       id={id}
                       value={value}
                       onBlur={handleSaveTask}
                       onChange={handleChangeValue}
                       autoFocus={true}/>
                }
            </div>

            <img className={styles.listItemDeleteBtn}
                 alt='deleteButton'
                 onClick={() => deleteTask(id)}
                 src={kor}/>
            <img className={styles.listItemEditBtn}
                 alt='editButton'
                 onClick={() => editTask(id, message)}
                 src={changed}/>
        </li>
    )
};

export default Task;