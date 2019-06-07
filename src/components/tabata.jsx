import React, { Component } from "react";

class Tabata extends Component {
  state = { time: 20, rest: 10, rounds: 8, started: false, break: false };

  tabata = () => {
    this.setState({ started: true });

    // started: true
    if (this.state.started) {
      if (this.state.time > 0) {
        // started and there is time
        this.setState({ time: this.state.time - 1 })
      } else {
        // started and there is no time
        this.setState({ break: true })
      }
    }

    // break: true
    if (this.state.break) {
      if (this.state.rest > 0) {
        // break and there is rest time
        this.setState({ rest: this.state.rest - 1 })
      } else {
        // break === true and there is no time
        if (this.state.rounds > 0) {
          this.setState({ rounds: this.state.rounds - 1 })
          this.setState({ break: false })
          this.setState({ time: 10 })
        } else {
          console.log('finished')
          this.setState({ started: false, break: false })
        }
      }
    }
  };

  startTabata = () => {
    setInterval(this.tabata, 1000) // 1-second intervals
    if (this.state.rounds > 0 || this.state.time > 0 || this.state.rest > 0) {
      this.setState({ rounds: this.state.rounds - 1 })
      this.setState({ time: this.state.time - 1 })
    }
    this.setState({ started: true });
  }

  stopTabata = () => {
    this.setState({ started: false });
    clearInterval(this.tabata);
  };

  resetTabata = (event) => {
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
          Time: <input type="text" pattern="[0-9]*" onChange={this.handleTimeInput} value={this.state.time} />
          Rest: <input type="text" pattern="[0-9]*" onChange={this.handleRestInput} value={this.state.rest} />
          Rounds: <input type="text" pattern="[0-9]*" onChange={this.handleRoundsInput} value={this.state.rounds} />
        </h4>
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
