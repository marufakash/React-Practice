import React from "react";
import Todo from "./Todo";
import { v4 as uuidv4 } from 'uuid';
import style from './todos.module.css';

const Todos = (props) => {
    console.log(props.todos);

    return (
        <div className={style.todos}>
            {props.todos.map((todo) => <Todo key={uuidv4()} todo={todo} />)}
        </div>
    )
}

export default Todos;