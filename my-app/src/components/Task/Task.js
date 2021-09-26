import React from 'react';
import s from "../ListPost/List.module.css";
import kor from '../assets/kor.png'


const Task = ({deleteTask, lineThroughTask, noLineThroughTask, message, style}) => (
    <div className={s.task}>
        <div className={s.task1}>
            <img src={kor} width={30} onClick={deleteTask}/>
        </div>
        <div className={s.task2} onClick={lineThroughTask}
             onDoubleClick={noLineThroughTask} style={style}>
            <li>{message}</li>
        </div>
    </div>
);

export default Task;