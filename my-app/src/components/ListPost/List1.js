import React from 'react';
import s from "./List.module.css";
import kor from '../assets/kor.png'


export default class List1 extends React.Component {
    constructor() {
        super();
        this.state = {
            style: {
                textDecoration: 'none'
            }
        };
    }

    onDeleteTask = () => {
        this.props.addTask();
    }

    handleClick() {
        this.setState({style: {textDecoration: 'line-through'}});
    }

    handleDoubleClick() {
        this.setState({style: {textDecoration: 'none'}});
    }

    render() {
        return (
            <div className={s.task}>
                <div className={s.task1}>
                    <img src={kor} width={30} onClick={this.onDeleteTask.bind(this)}/>
                </div>
                <div className={s.task2} onClick={this.handleClick.bind(this)} onDoubleClick={this.handleDoubleClick.bind(this)} style={this.state.style}>
                  <li>{this.props.message}</li>
                </div>

            </div>
        );
    }
}