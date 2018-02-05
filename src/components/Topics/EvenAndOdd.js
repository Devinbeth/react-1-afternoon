import React, { Component } from 'react';

class EvenAndOdd extends Component{
    constructor(props){
        super(props);
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ""
        }
    }

    click(){
        if(this.state.userInput){
            this.setState({
                evenArray: this.state.userInput.split(',').map((val) => Number(val)).filter((val) => val % 2 === 0),
                oddArray: this.state.userInput.split(',').map((val) => Number(val)).filter((val) => val % 2 > 0),
                userInput: ""
            });
        }
    }

    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <input className="inputLine" onChange={(e) => this.setState({userInput: e.target.value})}/>
                <button className="confirmationButton" onClick={() => this.click()}>Split</button>
                <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
                <h4>Evens and Odds</h4>
            </div>
        );
    }
}

export default EvenAndOdd;