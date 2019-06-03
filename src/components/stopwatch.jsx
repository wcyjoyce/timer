import React, { Component } from "react";

class Stopwatch extends Component {
  state = { time: 0, started: false };

  startTimer = (event) => {
    if (!this.state.started) {
      this.timer = setInterval(
        () => this.setState({ time: this.state.time + 1 })
      , 1000); // 1-second intervals
      this.setState({ started: true });
    };
  };

  stopTimer = (event) => {
    this.setState({ started: false });
    clearInterval(this.timer);
  };

  resetTimer = (event) => {
    this.setState({ time: 0, started: false });
    clearInterval(this.timer);
  };

  render() {
    console.log("stopwatch:")
    console.log(this.state);
    return (
      <div className="stopwatch">
        <h1>Timer</h1>
        <h4>Time: {this.state.time}</h4>
        <button className="btn btn-danger" onClick={this.startTimer}>Start</button>
        <button className="btn btn-danger" onClick={this.stopTimer}>Stop</button>
        <button className="btn btn-danger" onClick={this.resetTimer}>Reset</button>
      </div>
    );
  };
};

export default Stopwatch;
