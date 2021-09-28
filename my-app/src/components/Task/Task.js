import React from 'react';
import s from "./Task.module.css";
import kor from '../../assets/kor.png'


const Task = ({lineThroughTask, noLineThroughTask, deleteTask, message}) => (
    <div className={s.task}>
        <div className={s.task1}>
            <img src={kor} width={30} onClick={deleteTask}/>
        </div>
        <div className={s.task2}
             onClick={lineThroughTask}
             onDoubleClick={noLineThroughTask}>
            <li>{message}</li>
        </div>
    </div>
);

export default Task;