import React, { Component } from "react";

// TODO:
// 1) tabata timer doesn't setInterval if inputs have been changed

class Tabata extends Component {
  state = { time: 20, rest: 10, rounds: 8, started: false, break: false };

  tabata = () => {
    this.setState({ started: true });

    if (this.state.started) {
      if (this.state.time > 0) {
        this.setState({ time: this.state.time - 1 });
      } else {
        this.setState({ break: true });
      };
    };

    if (this.state.break) {
      if (this.state.rest > 0) {
        this.setState({ rest: this.state.rest - 1 });
      } else {
        if (this.state.rounds > 0) {
          this.setState({ rounds: this.state.rounds - 1, break: false, time: 10 });
        } else {
          this.setState({ started: false, break: false });
          console.log('finished');
        };
      };
    };
  };

  startTabata = () => {
    this.tabata = setInterval(this.tabata, 1000); // 1-second intervals
    // setInterval(this.tabata, 1000);
    if (this.state.rounds > 0 || this.state.time > 0 || this.state.rest > 0) {
      this.setState({ rounds: this.state.rounds - 1, time: this.state.time - 1 });
    };
    this.setState({ started: true });
  };

  stopTabata = () => {
    this.setState({ started: false });
    clearInterval(this.tabata);
  };

  resetTabata = () => {
    this.setState({ time: 20, rest: 10, rounds: 8, started: false, break: false });
    clearInterval(this.tabata);
  };

  handleTimeInput = (event) => { this.setState({ time: event.target.value }) };
  handleRestInput = (event) => { this.setState({ rest: event.target.value }) };
  handleRoundsInput = (event) => { this.setState({ rounds: event.target.value }) };

  render() {
    console.log("tabata:");
    console.log(this.state);

    return (
      <div className="tabata">
        <h1>Tabata</h1>
        <h4>
          Time: <input type="text" pattern="[0-9]*" onChange={this.handleTimeInput} />
          Rest: <input type="text" pattern="[0-9]*" onChange={this.handleRestInput} />
          Rounds: <input type="text" pattern="[0-9]*" onChange={this.handleRoundsInput} />
        </h4>
        <div>
          <h4>Round #{this.state.rounds}</h4>
          <h4>{!this.state.break ? this.state.time : this.state.rest}</h4>
        </div>
        <div>
          <button className="btn btn-danger" onClick={this.startTabata}>Start</button>
          <button className="btn btn-danger" onClick={this.stopTabata}>Stop</button>
          <button className="btn btn-danger" onClick={this.resetTabata}>Reset</button>
        </div>
      </div>
    );
  };
};

export default Tabata;
