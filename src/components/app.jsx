import React, { Component } from "react";

import Stopwatch from "./stopwatch.jsx";
import Pomodoro from "./pomodoro.jsx";

class App extends Component {
  state = {
    selected: "stopwatch",
    tabs: ["stopwatch", "pomodoro", "tabata", "custom"]
  };

  selectTab(index) {
    this.setState({ selected: this.state.tabs[index] })
  };

  renderContent() {
    switch (this.state.selected) {
      case "stopwatch":
        return <Stopwatch />
      case "pomodoro":
        return <Pomodoro />
      case "tabata":
        return "Tabata"
      case "custom":
        return "Custom"
      default:
        return <Stopwatch />
    };
  };

  render() {
    return (
      <div className="app">
        <div className="tabs">
          {this.state.tabs.map((tab, index) =>
            <button className="tab btn btn-info" onClick={() => this.selectTab(index)} key={index}>{tab}</button>
          )}
        </div>
        <div className="content">
          {this.renderContent()}
        </div>
      </div>
    );
  };
};

export default App;
