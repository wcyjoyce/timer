import React, { Component } from "react";

class Task extends Component {
  state = { id: null, category: "", description: "", completed: false };

  updateCompleted = (event) => {
    this.setState({ completed: !this.props.task.completed })
  };

  render() {
    return (
      <div className="task">
        <div className="category">{this.props.task.category}</div>
        <div className="description">{this.props.task.description}</div>
        <button className="status" onClick={this.updateCompleted}>{this.props.task.completed ? "Y" : "N"}</button>
      </div>
    );
  };
};

export default Task;
