import React, { Component } from "react";

import timeFormat from "../constants/timeFormat.js";

class Countdown extends Component {
  state = { time: 0, started: false };

  startCountdown = (event) => {
    if (!this.state.started && this.state.time > 0) {
      this.countdown = setInterval(
        () => this.state.time === 0
          ? (clearInterval(this.countdown), this.setState({ started: false }))
          : this.setState({ time: this.state.time - 1 }),
        1000 // 1-second intervals
      );
    this.setState({ started: true });
    };
  };

  stopCountdown = (event) => {
    this.setState({ started: false });
    clearInterval(this.countdown);
  };

  resetCountdown = (event) => {
    this.setState({ time: 25, started: false });
    clearInterval(this.countdown);
  };

  handleInput = (event) => {
    this.setState({ time: event.target.value });
  };

  render() {
    console.log("countdown:");
    console.log(this.state);

    return (
      <div className="countdown">
        <h1>Countdown</h1>
        <h4>Time: <input type="text" pattern="[0-9]*" onChange={this.handleInput} value={this.state.time} /></h4>
        <div>
          <button className="btn btn-danger" disabled={this.state.started} onClick={this.startCountdown}>Start</button>
          <button className="btn btn-danger" onClick={this.stopCountdown}>Stop</button>
          <button className="btn btn-danger" onClick={this.resetCountdown}>Reset</button>
        </div>
      </div>
    );
  };
};

export default Countdown;
