import React, { Component } from 'react';

class FilterObject extends Component{
    constructor(props){
        super(props);

        this.state = {
            unFilteredArray: [{
                        name: "Devin",
                        age: 32,
                        level: "off the charts"
                    },
                    {
                        name: "Lindsey",
                        age: 29,
                        level: "off the charts"
                    },
                    {
                        name: "Miles",
                        age: 1,
                        level: "off the charts"
                    },
                    {
                        name: "Ruby",
                        age: 4,
                        level: "off the charts"
                    }
                ],
            userInput: "",
            filteredArray: []
        };
    }
    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <span className="puzzleText">{JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine" onChange={(e) => this.setState({userInput: e.target.value})}/>
                <button className="confirmationButton"></button>
                <span className="resultsBox filterObjectRB">{JSON.stringify(this.state.filteredArray)}</span>
                <h4>Filter Object</h4>
            </div>
        );
    }
}

export default FilterObject;