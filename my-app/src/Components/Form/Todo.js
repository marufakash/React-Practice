import React from "react";
import style from './todo.module.css';
import { FaTrashAlt } from "react-icons/fa";

const Todo = (props) => {

    const {title, des} = props.todo;

    return (
        <div className={style.todo}>
            <div>
                <h2>{title}</h2>
                <p>{des}</p>
            </div>
            <button>
                <FaTrashAlt />
            </button>
        </div>
    )
}

export default Todo;