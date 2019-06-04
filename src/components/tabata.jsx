import React, { Component } from "react";

class Tabata extends Component {
  state = { time: 20, rest: 10, rounds: 8, started: false, break: false };

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
          <button className="btn btn-danger">Start</button>
          <button className="btn btn-danger">Stop</button>
          <button className="btn btn-danger">Reset</button>
        </div>
      </div>
    );
  };
};

export default Tabata;
