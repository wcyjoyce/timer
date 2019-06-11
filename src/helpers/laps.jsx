import React, { Component } from "react";

// import timeFormat from "./timeFormat.js";

class Laps extends Component {
  renderLaps() {
    return (
      this.props.laps.map((time, index) => {
        var difference = this.props.laps[index - 1] > 0 ? this.props.laps[index] - this.props.laps[index - 1] : this.props.laps[index];
        return <li key={index}>Lap {index + 1}: {difference} seconds</li>
      })
    );
  };

  render() {
    return (
      <div className="laps">
        <div>{this.renderLaps()}</div>
      </div>
    );
  };
};

export default Laps;
