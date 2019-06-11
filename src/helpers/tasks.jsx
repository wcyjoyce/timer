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
          <div key={index}><Task task={task}/></div>
        );
      })
    );
  };

  render() {
    return (
      <div className="tasks">
        <h5><strong>TODO List</strong></h5>
        {this.renderTasks()}
      </div>
    );
  };
};

export default Tasks;
