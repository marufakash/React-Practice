// CounterApp using class component
import React, { Component } from "react";

class CounterApp2 extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }

    render () {
        return(
            <div className="card counterApp">
                <h1 className="cardTitle">Counter App</h1>
                <h3>Using class component</h3>
                <h1 className="count">{this.state.count}</h1>
                <div>
                    <button onClick={() => this.setState({count: this.state.count+1})}>+</button>
                    <button onClick={() => this.setState({count: this.state.count-1})}>-</button>
                    <button onClick={() => this.setState({count: 0})}>0</button>
                </div>
            </div>
        )
    }
}

export default CounterApp2;