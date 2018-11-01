import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  //map method is used in place of foreach loop
  render() {
    console.log("counters - rendered");
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            onDelete={onDelete}
            onIncrement={onIncrement}
            key={counter.id}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
