import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    player: 0,
    players: [
      {
        name: "Kate",
        score: 0
      },
      {
        name: "Dylan",
        score: 0
      }
    ]
  };

  handleClick() {
    // copy the state
    const newState = { ...this.state };
    // save a referece to the players
    const players = newState.players;
    // get the current player
    const currentPlayer = newState.player;
    // update the current player's score
    players[currentPlayer].score++;
    // set the current player to the other player
    newState.player = (newState.player + 1) % 2;

    // this is a fancy way of doing this
    // newState.player = newState.player + 1;
    // if (newState.player > 1) newState.player = 0;
    // the newState.player is used to find the player in the player array so you know which score to update

    this.setState(newState);
  }

  render() {
    return (
      <div>
        <div>{this.state.players[0].name}</div>
        <div>{this.state.players[0].score}</div>
        <button onClick={() => this.handleClick()}>Go</button>
        <div>{this.state.players[1].name}</div>
        <div>{this.state.players[1].score}</div>
      </div>
    );
  }
}

export default App;
