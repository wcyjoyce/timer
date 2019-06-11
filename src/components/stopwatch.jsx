import React, { Component } from "react";

import Laps from "../helpers/laps.jsx";

class Stopwatch extends Component {
  state = { time: 0, started: false, rounds: 0, laps: [] };

  startTimer = (event) => {
    if (!this.state.started) {
      this.timer = setInterval(
        () => this.setState({ time: this.state.time + 1 })
      , 1000); // 1-second intervals
      this.setState({ started: true, rounds: this.state.rounds + 1 });
    };
  };

  lapTimer = (event) => {
    this.setState({ rounds: this.state.rounds + 1 });
    this.state.laps.push(this.state.time);
  };

  stopTimer = (event) => {
    if (this.state.started) {
      this.state.laps.push(this.state.time);
      this.setState({ started: false });
      clearInterval(this.timer);
    }
  };

  resetTimer = (event) => {
    this.setState({ time: 0, started: false, rounds: 0, laps: [] });
    clearInterval(this.timer);
  };

  render() {
    console.log("stopwatch:")
    console.log(this.state);

    return (
      <div className="stopwatch">
        <h1>Stopwatch</h1>
        <h4>Time: {this.state.time}</h4>
        <button className="btn btn-danger" onClick={this.startTimer}>Start</button>
        <button className="btn btn-danger" disabled={!this.state.started} onClick={this.lapTimer}>Lap</button>
        <button className="btn btn-danger" onClick={this.stopTimer}>Stop</button>
        <button className="btn btn-danger" onClick={this.resetTimer}>Reset</button>
        <Laps laps={this.state.laps} />
      </div>
    );
  };
};

export default Stopwatch;
