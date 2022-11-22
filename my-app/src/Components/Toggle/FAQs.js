import React from "react";
import Toggle from "./Toggle";
import style from './Toggle.module.css';

const FAQs = (props) => {
    return (
        <div className={style.toggle}>
            <h1 className="cardTitle">Frequently Asked Questions</h1>
            {props.Data.map((data) => <Toggle key={data.id} data={data} />)}
        </div>
    )
}

export default FAQs;