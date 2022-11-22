import React, { useState } from "react";
import style from './newtodo.module.css';

const NewTodo = (props) => {
    const [todos, setTodos] = useState({title: '', des: ''});
    const {title, des} = todos;

    const handleChange = (e) => {
        setTodos({...todos,[e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onTodo(todos);
        setTodos({title: '', des: ''});
    }

    return (
        <div className={style.form}>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title : </label>
                    <input type="text" onChange={handleChange} value={title} name="title" id="title" required />
                </div>
                <div>
                    <label htmlFor="des">Description : </label>
                    <textarea type="text" onChange={handleChange} value={des} name="des" cols="30" rows="5" id="des" required />
                </div>
                <div>
                    <button type="submit">Add todo</button>
                </div>
            </form>
        </div>
    )
}

export default NewTodo;