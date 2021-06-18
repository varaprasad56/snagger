import React, { Component } from 'react';
class Counter extends Component {
    state = {
        value : 0
    }
    constructor(){
        super()
        this.incrementCount = this.incrementCount.bind(this);
        this.decrementCount = this.decrementCount.bind(this);
    }
    incrementCount() {
        console.log('incremented');
        this.setState({value:this.state.value+1})
    }
    decrementCount(){
        console.log('decremented');
        this.setState({value:this.state.value-1})
    }
    displayCountValue(){
        if(this.state.value>0){
            return this.state.value;
        }
        return 'Zero';
    }
    getBadgeClasses(){
        return (this.state.value===0) ? "badge badge-secondary":"badge badge-primary";
    }
    render() { 
        return (<React.Fragment>
            <span className = {this.getBadgeClasses()}>{this.displayCountValue()}</span>
            <button onClick = {this.incrementCount} className = "btn btn-success m-2">Increment</button>
            <button onClick = {this.decrementCount} className = "btn btn-warning">Decrement</button>           
        </React.Fragment>);
    }
}
 
export default Counter ;