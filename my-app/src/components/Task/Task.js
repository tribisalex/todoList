import React from 'react';
import styles from "./Task.module.css";
import kor from '../../assets/kor.png'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Task = ({done, taskMarked, id, message, deleteTask}) => {

    return (
        <li className={cx('list_item', {'list_item_done': done})}>
            <div className={styles.task}>
                <input
                    type='checkbox'
                    className={styles.list_item_checkbox}
                    defaultChecked={done}
                    onChange={() => taskMarked(id)}/>
                <span className={styles.listItemSpan}>{message}</span>
            </div>
            <img className={styles.listItemDeleteBtn} onClick={() => deleteTask(id)} src={kor} />
        </li>
    )
};

export default Task;