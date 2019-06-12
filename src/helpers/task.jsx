import React, { Component } from "react";

class Task extends Component {
  render() {
    const { task } = this.props;

    return (
      <div className="task">
        <div className="category">{task.category}</div>
        <div className="description">{task.description}</div>
        <button className="status" onClick={() => this.props.updateStatus(task)}>{task.completed ? "Y" : "N"}</button>
      </div>
    );
  };
};

export default Task;
