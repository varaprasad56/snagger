import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count : 0,
        items : ["yoga","preperation","Movies"]
    }
    constructor(){
        super()
        this.incrementCount = this.incrementCount.bind(this);
        this.decrementCount = this.decrementCount.bind(this);
    }
    incrementCount() {
        console.log('incremented');
        this.setState({count:this.state.count+1})
    }
    decrementCount(){
        console.log('decremented');
        this.setState({count:this.state.count-1})
    }
    displayCountValue(){
        if(this.state.count>0){
            return this.state.count;
        }
        return 'Zero';
    }
    render() { 
        return (<React.Fragment>
            <span className = "tag-pill">{this.displayCountValue()}</span>
            <button onClick = {this.incrementCount} className = "btn btn-primary m-2">Increment</button>
            <button onClick = {this.decrementCount} className = "btn btn-secondary">Decrement</button>
            {this.state.count === 0 && 'Visible if Count is Zero'}
            <ul>
                {this.state.items.map(item => {return <li key= {item}>{item}</li>})}
            </ul>
        </React.Fragment>);
    }
}
 
export default Counter ;