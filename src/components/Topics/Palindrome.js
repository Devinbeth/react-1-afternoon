import React, { Component } from 'react';

class Palindrome extends Component{
    constructor(props){
        super(props);
        this.state = {
            userInput: "",
            palindrome: ""
        }
    }
    click(){
        let length = Math.floor(this.state.userInput.length / 2);
        let str = `${this.state.userInput} IS a palindrome`;
        for(let i = 0; i < length; i++){
            if(this.state.userInput.charAt(i) !== this.state.userInput.charAt(this.state.userInput.length - (i + 1))){
                str = `${this.state.userInput} is NOT a palindrome`;
            }
        }
        this.setState({
            userInput: "",
            palindrome: str
        });
    }
    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <input className="inputLine" onChange={(e) => this.setState({userInput: e.target.value})}/>
                <button className="confirmationButton" onClick={() => this.click()}>Check</button>
                <span className="resultsBox">{JSON.stringify(this.state.palindrome)}</span>
                <h4>Palindrome</h4>
            </div>
        );
    }
}

export default Palindrome;