import React, { useState } from "react";
import style from './Toggle.module.css'

const Toggle = (props) => {
    const { name, des } = props.data;

    const [toggle, setToggle] = useState(false);

    return (
        <div className={style.faqs}>
            <div>
                <h2>{name}</h2>
                {toggle && <p>{des}</p>}
            </div>
            <div>
                <button onClick={() => setToggle(!toggle)}>{toggle ? "-" : "+"}</button>
            </div>
        </div>
    )
}

export default Toggle;