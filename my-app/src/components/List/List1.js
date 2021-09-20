import React from 'react';
import s from "../ListPost/List.module.css";


export default class List1 extends React.Component {
    constructor() {
        super();
        this.state = {
            style: {
                textDecoration: 'none'
            }
        };
    }

    handleClick() {
        this.setState({style: {textDecoration: 'line-through'}});
    }

    handleDoubleClick() {
        this.setState({style: {textDecoration: 'none'}});
    }

    render() {
        return (
            <div>
                <div className={s.item} onDoubleClick={this.handleDoubleClick.bind(this)}
                     onClick={this.handleClick.bind(this)} style={this.state.style}>
                    {this.props.message}
                </div>
                <button>Удалить</button>
            </div>
        );
    }
}