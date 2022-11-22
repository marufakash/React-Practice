import React, { useState } from "react";
import Todos from "./Todos";
import style from './home.module.css';
import NewTodo from "./NewTodo";

const Home = () => {

    const [todos, setTodos] = useState([]);

    const handleOnTodo = (e) => {
        setTodos([...todos, e]);
    }

    return (
        <div className={style.container}>
            <h1 className={style.heading}>Todo App</h1>
            <NewTodo onTodo={handleOnTodo} />
            <Todos todos={todos} />
        </div>
    )
}

export default Home;