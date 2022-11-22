import React, { useState } from "react";
import style from './form.module.css';

const Form = (props,onData) => {
    const [users, setUsers] = useState({username: '', email: ''});
    const {username, email} = users;

    const handleChange = (e) => {
        setUsers({...users, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onData(users);
        setUsers({username: '', email: ''});
    }

    return (
        <div className={style.form}>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Name : </label>
                    <input type="text" value={username} onChange={handleChange} name="username" id="username" required />
                </div>
                <div>
                    <label htmlFor="email">Email : </label>
                    <input type="email" value={email} onChange={handleChange} name="email" id="email" required />
                </div>
                <div className={style.btn}>
                    <button type="submit">{props.onText}</button>
                </div>
            </form>
        </div>
    )
}

export default Form;