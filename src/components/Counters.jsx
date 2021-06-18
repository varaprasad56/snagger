import React, { Component } from 'react';
import Counter from "./Counter";
class Counters  extends Component {
    state = {  
        counters : [
            {id:0, value:0},
            {id:1, value:0},
            {id:2, value:0},
            {id:3, value:0},
            {id:4, value:0}
        ]
    }
    
    render() { 
        return ( 
        <React.Fragment>
            <Counter value ='2'/>
            <Counter value='5'/>
            <Counter value='5'/>
        </React.Fragment>);
    }
}
 
export default Counters;