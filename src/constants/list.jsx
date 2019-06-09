import React, { Component } from "react";

// import timeFormat from "./timeFormat.js";

class List extends Component {
  renderList() {
    return (
      this.props.list.map((time, index) => {
        var difference = this.props.list[index - 1] > 0 ? this.props.list[index] - this.props.list[index - 1] : this.props.list[index];
        return <li key={index}>Lap {index + 1}: {difference} seconds</li>
      })
    );
  };

  render() {
    return (
      <div className="list">
        <div>{this.renderList()}</div>
      </div>
    );
  };
};

export default List;
