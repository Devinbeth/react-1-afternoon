import React, { Component } from 'react';

class FilterObject extends Component{
    constructor(props){
        super(props);

        this.state = {
            unFilteredArray: [
                {
                    name: "Devin",
                    age: 32,
                    level: 1000
                },
                {
                    name: "Lindsey",
                    age: 29,
                    level: 1450
                },
                {
                    name: "Miles",
                    age: 1,
                    level: 3500
                },
                {
                    name: "Ruby",
                    age: 4,
                },
                {
                    name: "Kelva",
                    age: 2,
                }
            ],
            userInput: "",
            filteredArray: []
        };
    }
    click(){
        let filter = [];
        for(let i = 0; i < this.state.unFilteredArray.length; i++){
            if(this.state.unFilteredArray[i][this.state.userInput]){
                filter.push(this.state.unFilteredArray[i]);
            }
        }
        this.setState({
            userInput: "",
            filteredArray: filter
        });
    }
    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <span className="puzzleText">{JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine" onChange={(e) => this.setState({userInput: e.target.value})}/>
                <button className="confirmationButton" onClick={() => this.click()}>Filter</button>
                <span className="resultsBox filterObjectRB">{JSON.stringify(this.state.filteredArray)}</span>
                <h4>Filter Object</h4>
            </div>
        );
    }
}

export default FilterObject;