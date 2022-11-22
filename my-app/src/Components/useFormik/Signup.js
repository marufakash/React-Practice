import React from "react";
import { useFormik } from "formik";
import style from './signup.module.css';

const Signup = () => {

    const formik = useFormik({
        initialValues : {
            name : '',
            email : '',
            password : ''
        },
        onSubmit : (values, {resetForm}) => {
            console.log(values);
            resetForm({values : ''})
        }
    })

    return (
        <div className={style.signup}>
            <h1 className="cardTitle">Registration form</h1>
            <form action="" onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="name">Name : </label>
                    <input type="text" value={formik.values.name} onChange={formik.handleChange} name="name" id="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email : </label>
                    <input type="email" value={formik.values.email} onChange={formik.handleChange} name="email" id="email" required />
                </div>
                <div>
                    <label htmlFor="password">Password : </label>
                    <input type="password" value={formik.values.password} onChange={formik.handleChange} name="password" id="password" required />
                </div>
                <div>
                    <button type="submit">Registration</button>
                </div>
            </form>
        </div>
    )
}

export default Signup;