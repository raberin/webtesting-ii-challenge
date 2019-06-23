import React, { Component } from "react";
import Display from "./Display";
class Dashboard extends Component {
  state = {
    balls: 0,
    strikes: 0
  };

  strike = () => {
    if (this.state.strikes === 3) {
      this.setState({
        strikes: 0,
        balls: 0
      });
    } else {
      this.setState({
        strikes: this.state.strikes + 1
      });
    }
    console.log(this.state.strikes);
  };

  ball = () => {
    if (this.state.balls === 4) {
      this.setState({
        strikes: 0,
        balls: 0
      });
    } else {
      this.setState({
        balls: this.state.balls + 1
      });
    }
    console.log(this.state.balls);
  };

  hit = () => {
    this.setState({
      strikes: 0,
      balls: 0
    });
  };

  foul = () => {
    if (this.state.strikes < 2) {
      this.setState({
        strikes: this.state.strikes + 1
      });
    }
  };

  render() {
    return (
      <div>
        <Display balls={this.state.balls} strikes={this.state.strikes} />
        <button onClick={this.strike}>Strike</button>
        <button onClick={this.ball}>Ball</button>
        <button onClick={this.foul}>Foul</button>
        <button onClick={this.hit}>Hit</button>
      </div>
    );
  }
}

export default Dashboard;
