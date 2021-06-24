import React, { Component } from 'react';
import Counter from "./Counter";
class Counters  extends Component {
    state = {  
        counters : [
            {id:0, value:0},
            {id:1, value:0},
            {id:2, value:3},
            {id:3, value:0},
            {id:4, value:0}
        ]
    }
    handleDelete = (id) => {
        const counters = this.state.counters.filter(c => c.id!=id);
        this.setState({counters})
      
    }
    render() { 
        return ( 
        <React.Fragment>
            {this.state.counters.map((counter => <Counter key = {counter.id} id = {counter.id} value = {counter.value} delete = {this.handleDelete}/>))}
            {/* <Counter value ={2}/>
            <Counter value={3}/>
            <Counter value={5}/> */}
        </React.Fragment>);
    }
}
 
export default Counters;