import React, { Component } from "react";
import { connect } from "react-redux";

import Task from "./task.jsx";
import { fetchTasks, clearTasks } from "../actions";
// import placeholder from "./placeholder.js";

class Tasks extends Component {
  // state = { tasks: placeholder };
  componentDidMount() {
    this.props.fetchTasks();
  };

  // renderTasks() {
  //   if (this.state.tasks) {
  //     return (
  //       this.state.tasks.map((task, index) => {
  //         return (
  //           <div key={index}><Task task={task} updateStatus={this.updateStatus} /></div>
  //         )
  //       })
  //     );
  //   } else {
  //     return <h3>Your TODO list is empty.</h3>;
  //   };
  // };

  renderTasks() {
    if (this.props.tasks) {
      return (
        this.props.tasks.map((task, index) => {
          return <div key={index}><Task task={task} updateStatus={this.updateStatus}/></div>;
        })
      );
    } else {
      return <h3>Your TODO list is empty.</h3>;
    };
  };

  renderForm() {
    return (
      <form className="addition" onClick={this.addTask}>
        <input className="category" type="text" defaultValue={"Category"} />
        <input className="description" type="text" defaultValue={"Description"} />
        <input type="submit" value="Submit" />
      </form>
    );
  };

  updateStatus = (task) => {
    this.setState({ completed: !task.completed });
    console.log(task.completed)
  };

  addTask = (event) => {
    event.preventDefault();
  };

  // clearTasks = () => {
  //   this.setState({ tasks: [] });
  // };

  render() {
    return (
      <div className="tasks">
        <h5>
          <strong>TODO List</strong> {" "}
          {/*<button onClick={this.clearTasks}>Clear</button>*/}
          <button onClick={this.props.clearTasks}>Clear</button>
        </h5>
        {this.renderTasks()}
        {this.renderForm()}
      </div>
    );
  };
};

function mapStateToProps(state) {
  return { tasks: state.tasks, task: state.task };
};

// export default Tasks;
export default connect(mapStateToProps, { fetchTasks, clearTasks })(Tasks);
