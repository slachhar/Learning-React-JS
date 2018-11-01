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

  handleDelete = counterId => {
    // console.log("Event Handler Called", counterId);
    //this.setState({ value: this.state.value + 1 });
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
  };

  //map method is used in place of foreach loop
  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            onDelete={this.handleDelete}
            key={counter.id}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
