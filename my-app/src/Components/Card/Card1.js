// Using functional component create a card
import React from "react";

const date = new Date();
const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();
const currentDate = `${day}/${month}/${year}`;

function Card1(props) {
    const {title, des} = props;
    return (
        <div className="card">
            <h1 className="cardTitle">{title}</h1>
            <h3>Using functional Component</h3>
            <p>{des}</p>
            <h4 className="CardFooter">{currentDate}</h4>
        </div>
    )
}

export default Card1;