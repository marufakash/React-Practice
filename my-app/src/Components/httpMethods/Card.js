import React, { useEffect, useState } from "react";
import Form from "./Form";
import style from './form.module.css';

const URL = "https://rest-api-without-db.herokuapp.com/users/";

const Card = () => {
    const [users, setUsers] = useState();
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const getAllUsers = () => {
        fetch(URL)
        .then((res) => {
            if(!res.ok){
                throw Error("fetching is not successful");
            }else{
                return res.json();
            }
        })
        .then((data) => {
            setUsers(data.users);
            console.log(data.users);
        })
        .catch((err) => {
            setError(err);
        })
        .finally(() => {
            setIsLoading(false);
        })
    }

    useEffect(() => {
        getAllUsers();
    },[])

    // Delete user
    const handleDelete = (id) => {
        fetch(URL + `/${id}`,{
            method: "DELETE"
        })
        .then((res) => {
            if(!res.ok){
                throw Error("Deleting is not successful");
            }else{
                getAllUsers();
            }
        })
        .catch((err) => {
            setError(err.message);
        })
    }

    // Add user
    const addUser = (data) => {
        // setUsers([...users,data])
        fetch(URL, {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(data)
        })
        .then((res) => {
            if(res.status === 201){
                getAllUsers();
            }else{
                throw Error("Could not create user")
            }
        })
        .catch((err) => {
            setError(err.message);
        })
    }

    return (
        <div>
            <h1 className={style.heading}>User management App</h1>
            <Form onText="Add user" onData={addUser} />
            {error && <h3 className={style.headingStyle}>{error}</h3>}
            {isLoading && <h3 className={style.headingStyle}>Data is loading...</h3>}
            {users && users.map((user) => {
                const {id, username, email} = user;
                return (
                    <article key={id} className={style.card}>
                        <p>Name : {username}</p>
                        <p>Email : {email}</p>
                        <button>Edit</button>
                        <button onClick={() => {handleDelete(id)}}>Delete</button>
                    </article>
                )
            })}
        </div>
    )
}

export default Card;