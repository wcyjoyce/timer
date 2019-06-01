import React, { Component } from "react";

class App extends Component {
  state = {
    selected: "stopwatch",
    tabs: ["stopwatch", "pomodoro", "tabata", "custom"]
  };

  selectTab(index) {
    this.setState({ selected: this.state.tabs[index] })
    console.log(this.state.selected);
  };

  render() {
    return (
      <div className="app">
        <div className="tabs">
          {this.state.tabs.map((tab, index) =>
            <button className="tab btn btn-info" onClick={() => this.selectTab(index)} key={index}>{tab}</button>
          )}
        </div>
      </div>
    );
  };
};

export default App;
