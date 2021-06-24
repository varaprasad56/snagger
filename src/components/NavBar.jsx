import React, { Component } from 'react';
class NavBar extends Component {
    getActiveCounters = () => {
        let counters = this.props.counters.filter(counter => counter.value>0);
        return counters.length;
    }
    render() { 
        return (  
            <p>Total Active Counters = {this.getActiveCounters()}</p>
        );
    }
}
 
export default NavBar;