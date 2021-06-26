import React, { Component } from "react";
class Counter extends Component {
  getButtonClass = () => {
    return this.props.counter.value > 0
      ? "btn btn-secondary"
      : "btn btn-secondary disabled";
  };
  getValueBadgeClass = () => {
    return this.props.counter.value >= 0
      ? "badge badge-primary"
      : "badge badge-warning";
  };
  render() {
    return (
      <div className="row">
        <div className="col-sm">
          <span className={this.getValueBadgeClass()}>
            {this.props.counter.value}
          </span>
        </div>
        <div className="col-sm">
          <button
            onClick={() => {
              this.props.onIncrement(this.props.counter);
            }}
            className="btn btn-secondary"
          >
            +
          </button>
        </div>
        <div className="col-sm">
          <button
            onClick={() => {
                if(this.props.counter.value>0){
                    this.props.onDecrement(this.props.counter);
                }
            }}
            className={this.getButtonClass()}>
            -
          </button>
        </div>
        <div className="col-sm">
          <button
            className="btn btn-danger"
            onClick={() => {
              this.props.onDelete(this.props.counter);
            }}
          >
            X
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
