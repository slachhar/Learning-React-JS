import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = () => {
    console.log("Event Handler Called");
    //this.setState({ value: this.state.value + 1 });
  };

  //map method is used in place of foreach loop
  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            onDelete={this.handleDelete}
            key={counter.id}
            value={counter.value}
          >
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
