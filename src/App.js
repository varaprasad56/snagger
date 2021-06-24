import React, { Component } from "react";
import Counters from "./components/Counters";
import NavBar from "./components/NavBar";
class App extends Component {
  state = {
    counters: [
      { id: 0, value: 0 },
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  handleIncrement = (counter) => {
    let counters = [...this.state.counters];
    let counterIndex = counters.indexOf(counter);
    counters[counterIndex] = { ...counter };
    counters[counterIndex].value++;
    this.setState({ counters });
  };
  handleDecrement = (counter) => {
    let counters = [...this.state.counters];
    let counterIndex = counters.indexOf(counter);
    counters[counterIndex] = { ...counter };
    counters[counterIndex].value--;
    this.setState({ counters });
  };
  handleDelete = (counter) => {
    console.log(this.state.counters);
    let counterId = counter.id;
    let counters = [...this.state.counters];
    counters = counters.filter((counterItem) => counterItem.id !== counterId);
    this.setState({ counters });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar counters={this.state.counters} />
        <div className="container w-25">
          <Counters
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </div>
      </React.Fragment>
    );
  }
}
export default App;
