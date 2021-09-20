import React from 'react';
import s from './List.module.css';

const List = (props) => {
    let strikeOut = () => {
            if (this.state.change) {
                this.setState({
                    styleChange: false
                });
                return {
                    backgroundColor: "red"
                };
            } else {
                this.setState({
                    styleChange: true
                });
                return;
            }
        };


    return (
        <div className={s.item} onClick={strikeOut}>
            {props.message}
            <button>Удалить</button>
        </div>
    )
}

export default List;