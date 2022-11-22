// CounterApp using functional component
import React, { useState } from "react";

function CounterApp1() {
    const [count, setCount] = useState(0)
    return (
        <div className="card counterApp">
            <h1 className="cardTitle">Counter App</h1>
            <h3>Using functional component</h3>
            <h1 className="count">{count}</h1>
            <div>
                <button onClick={() => setCount(count+1)} disabled={count===10 ? true : false}>+</button>
                <button onClick={() => setCount(count-1)} disabled={count===-10 ? true : false}>-</button>
                <button onClick={() => setCount(0)}>0</button>
            </div>
        </div>
    )
}

export default CounterApp1;