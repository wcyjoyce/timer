import React, { Component } from "react";

// import timeFormat from "./timeFormat.js";

class List extends Component {
  renderList() {
    return (
      this.props.list.map((time, index) => {
        if (this.props.list[index - 1] > 0) {
          return (
            <li key={index}>
              Lap {index + 1}: {this.props.list[index] - this.props.list[index - 1]} seconds
            </li>
          )
        } else {
          return <li key={index}>Lap {index + 1}: {this.props.list[index]} seconds</li>
        }
      })
    )
  }

  render() {
    return (
      <div className="list">
        <div>{this.renderList()}</div>
      </div>
    );
  };
};

export default List;
