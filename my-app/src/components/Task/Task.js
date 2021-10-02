import React from 'react';
import styles from "./Task.module.css";
import kor from '../../assets/kor.png'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Task = (props) => {
    return (
        <li className={cx('list_item', {'list_item_done': props.done})}>
            <div className={styles.task}>
                <input
                    type='checkbox'
                    className={styles.list_item_checkbox}
                    defaultChecked={props.done}
                    onChange={() => props.taskMarked(props.id)}/>
                <span className={styles.listItemSpan}>{props.message}</span>
            </div>
            <img className={styles.listItemDeleteBtn} onClick={props.deleteTask} src={kor} />
        </li>
    )
};

export default Task;