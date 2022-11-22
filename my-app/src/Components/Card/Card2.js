// Using class component create a card
import React, { Component } from "react";

const date = new Date();
const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();
const currentDate = `${day}/${month}/${year}`;

class Card2 extends Component {
    render () {
        const {title, des} = this.props;
        return (
            <div className="card">
                <h1 className="cardTitle">{title}</h1>
                <h3>Using class component</h3>
                <p>{des}</p>
                <h4 className="CardFooter">{currentDate}</h4>
            </div>
        )
    }
}

export default Card2;