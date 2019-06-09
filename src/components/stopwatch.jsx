import React, { Component } from "react";

import List from "../constants/list.jsx";

class Stopwatch extends Component {
  state = { time: 0, started: false, laps: 0, list: [] };

  startTimer = (event) => {
    if (!this.state.started) {
      this.timer = setInterval(
        () => this.setState({ time: this.state.time + 1 })
      , 1000); // 1-second intervals
      this.setState({ started: true, laps: this.state.laps + 1 });
    };
  };

  lapTimer = (event) => {
    this.setState({ laps: this.state.laps + 1 });
    this.state.list.push(this.state.time);
  };

  stopTimer = (event) => {
    this.state.list.push(this.state.time);
    this.setState({ started: false });
    clearInterval(this.timer);
  };

  resetTimer = (event) => {
    this.setState({ time: 0, started: false, laps: 0, list: [] });
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
        <List list={this.state.list} />
      </div>
    );
  };
};

export default Stopwatch;
