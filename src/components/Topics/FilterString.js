import React, { Component } from 'react';

class FilterObject extends Component{
    constructor(props){
        super(props);
        this.state = {
            unFilteredArray: ['dog1', 'dog2', 'dog3', 'cat1', 'cat2', 'cat3'],
            userInput: "",
            filteredArray: []
        }
    }
    click(){
        let filter = [];
        for(let i = 0; i < this.state.unFilteredArray.length; i++){
            if(this.state.unFilteredArray[i].includes(this.state.userInput)){
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
            <div className="puzzleBox filterStringPB">
                <span className="puzzleText">{JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine" onChange={(e) => this.setState({userInput: e.target.value})}/>
                <button className="confirmationButton" onClick={() => this.click()}>Filter</button>
                <span className="resultsBox filterStringRB">{JSON.stringify(this.state.filteredArray)}</span>
                <h4>Filter String</h4>
            </div>
        );
    }
}

export default FilterObject;