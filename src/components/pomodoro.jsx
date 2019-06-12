import React, { Component } from "react";

import Tasks from "../helpers/tasks.jsx";
// import timeFormat from "../helpers/timeFormat.js";

class Pomodoro extends Component {
  state = { time: 5, rest: 1, started: false, break: false, rounds: 0 };


  pomodoro = () => {
    const workTime = 5;
    const restTime = 1;

    if (this.state.started) {
      if (!this.state.break) {
        this.state.time > 0
          ? this.setState({ time: this.state.time - 1, rest: restTime })
          : this.setState({ break: true })
      } else {
        this.state.rest > 0
          ? this.setState({ rest: this.state.rest - 1, time: workTime })
          : this.setState({ break: false, rounds: this.state.rounds + 1 })
      };
    };
  };

  startPomodoro = (event) => {
    this.pomodoro = (
      setInterval(this.pomodoro, 1000),
      this.setState({ started: true })
    );
  };

  stopPomodoro = (event) => {
    this.setState({ started: false });
    clearInterval(this.pomodoro);
  };

  resetPomodoro = (event) => {
    this.setState({ time: 5, rest: 1, started: false, break: false, rounds: 0 });
    clearInterval(this.pomodoro);
  };

  render() {
    console.log("pomodoro: ")
    console.log(this.state)

    const restColour = {color: "green"};
    const workColour = {color: "red"};

    return (
      <div className="pomodoro">
        <h1>Pomodoro</h1>
        <h4>Pomodoro #{this.state.rounds}</h4>
        <h4 style={this.state.break ? restColour : workColour}>{!this.state.break ? this.state.time : this.state.rest}</h4>
        <Tasks />
        <div>
          <button className="btn btn-danger" onClick={this.startPomodoro}>Start</button>
          <button className="btn btn-danger" onClick={this.stopPomodoro}>Stop</button>
          <button className="btn btn-danger" onClick={this.resetPomodoro}>Reset</button>
        </div>
      </div>
    );
  };
};

export default Pomodoro;
