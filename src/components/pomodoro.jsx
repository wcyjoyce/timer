import React, { Component } from "react";

class Pomodoro extends Component {
  state = { time: 25, started: false };

  startPomodoro = (event) => {
    if (!this.state.started && this.state.time > 0) {
      this.pomodoro = setInterval(
        () =>
        this.state.time === 0
          ? (clearInterval(this.pomodoro), this.setState({ started: false }))
          : this.setState({ time: this.state.time - 1 }),
        1000
      ); // 1-second intervals
    this.setState({ started: true });
    };
  };

  stopPomodoro = (event) => {
    this.setState({ started: false });
    clearInterval(this.pomodoro);
  };

  resetPomodoro = (event) => {
    this.setState({ time: 25, started: false });
    clearInterval(this.pomodoro);
  };

  handleInput = (event) => {
    this.setState({ time: event.target.value })
  };

  render() {
    console.log("pomodoro: ")
    console.log(this.state)
    return (
      <div className="pomodoro">
        <h1>Pomodoro</h1>
        <h4>
          Time: <input type="text" pattern="[0-9]*" onChange={this.handleInput} value={this.state.time} />
        </h4>
        <div>
          <button className="btn btn-danger" onClick={this.startPomodoro}>Start</button>
          <button className="btn btn-danger" onClick={this.stopPomodoro}>Stop</button>
          <button className="btn btn-danger" onClick={this.resetPomodoro}>Reset</button>
        </div>
      </div>
    )
  }
}

export default Pomodoro;
