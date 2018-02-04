import React, { Component } from 'react';

class Sum extends Component{
    constructor(props){
        super(props);
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        };
    }
    click(){
        this.setState({
            sum: `${this.state.number1} + ${this.state.number2} = ${this.state.number1 + this.state.number2}`
        });
    }
    render() {
        return (
            <div className="puzzleBox sumPB">
                <input className="inputLine" onChange={(e) => this.setState({number1: Number(e.target.value)})}/>
                <input className="inputLine" onChange={(e) => this.setState({number2: Number(e.target.value)})}/>
                <button className="confirmationButton" onClick={() => this.click()}>Add</button>
                <span className="resultsBox">{this.state.sum}</span>
                <h4>Sum</h4>
            </div>
        );
    }
}

export default Sum;