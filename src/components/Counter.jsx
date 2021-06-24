import React, { Component } from 'react';
class Counter extends Component {
    state = {
        id:this.props.id,
        value : this.props.value
    }
    constructor(props){
        super(props)
        //  this.setState({value:this.props.value})
        this.incrementCount = this.incrementCount.bind(this);
        this.decrementCount = this.decrementCount.bind(this);
    }
    incrementCount() {
        this.setState({value:this.state.value+1})
    }
    decrementCount(){
        this.setState({value:this.state.value-1})
    }
    displayCountValue(){
        if(this.state.value>0){
            return this.state.value;
        }
        return 'Zero';
    }
    getBadgeClasses(){
        return (this.state.value===0) ? "badge m-1 badge-secondary":"badge m-1 badge-primary";
    }
    render() { 
        return (<React.Fragment>
            <div>
            <span className = {this.getBadgeClasses()}>{this.displayCountValue()}</span>
            <button onClick = {this.incrementCount} className = "btn btn-success m-2">Increment</button>
            <button onClick = {this.decrementCount} className = "btn btn-warning m-2">Decrement</button>   
            <button className = "btn btn-danger m-2" onClick = {() => this.props.delete(this.state.id)}>Delete</button>
            </div>        
        </React.Fragment>);
    }
}
 
export default Counter ;