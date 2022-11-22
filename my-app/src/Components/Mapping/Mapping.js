import React from "react";
import style from './mapping.module.css';

const users = [
    {
        name : "Maruf Akash",
        age : 22,
        friends : [
            {
                name : "Gazi Mahabuba",
                id : "19CSE018",
                skills : [
                    {
                        programming : "C++, Java, Python, JavaScript, Ruby, PHP",
                        framework : "BootStrap, Reactjs, Node"
                    },
                    {
                        computer : "MS-Word, MS-Excel",
                        library : "Autocad, VS code, CodeBlocks"
                    }
                ]
            }
        ]
    },
    {
        name : "Sumaya Islam",
        age : 23,
        friends : [
            {
                name : "Urmi Akter",
                id : "19EEE018",
                skills : [
                    {
                        programming : "C++, Java, Python, JavaScript, Ruby, PHP",
                        framework : "BootStrap, Reactjs, Node"
                    },
                    {
                        computer : "MS-Word, MS-Excel",
                        library : "Autocad, VS code, CodeBlocks"
                    }
                ]
            }
        ]
    }
]

const Mapping = () => {
    return (
        <div>
            {users.map((user) =>
                <article className={style.mapping}>
                    <h1>Name : {user.name}</h1>
                    <h2>Age : {user.age}</h2>
                    {user.friends.map((friend) =>
                        <article className={style.map}>
                            <h3>Name : {friend.name}</h3>
                            <h3>ID : {friend.id}</h3>
                            {friend.skills.map((skill) => 
                                <article>
                                    <h3>Programming : {skill.programming}</h3>
                                    <h3>Framework : {skill.framework}</h3>
                                    <h3>Computer : {skill.computer}</h3>
                                    <h3>Software : {skill.library}</h3>
                                </article>
                            )}
                        </article>
                    )}
                </article>
            )}
        </div>
    )
}

export default Mapping;