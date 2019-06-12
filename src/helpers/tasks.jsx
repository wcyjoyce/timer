import React, { Component } from "react";

import Task from "./task.jsx";
import placeholder from "./placeholder.js";

class Tasks extends Component {
  state = { tasks: placeholder };

  renderTasks() {
    console.log(this.state.tasks)
    return (
      this.state.tasks.map((task, index) => {
        return (
          <div key={index}><Task task={task} updateStatus={this.updateStatus}/></div>
        );
      })
    );
  };

  renderForm() {
    return (
      <div className="addition">
        <input className="category" type="text" defaultValue={"Category"} />
        <input className="description" type="text" defaultValue={"Description"} />
        <button onClick={this.addTask}>Submit</button>
      </div>
    )
  };

  updateStatus = (task) => {
    this.setState({ completed: !task.completed });
    console.log(task.completed)
  };

  clearTasks = () => {
    this.setState({ tasks: [] });
  };

  render() {
    return (
      <div className="tasks">
        <h5>
          <strong>TODO List</strong> {" "}
          <button onClick={this.clearTasks}>Clear</button>
        </h5>
        {this.renderTasks()}
        {this.renderForm()}
      </div>
    );
  };
};

export default Tasks;
