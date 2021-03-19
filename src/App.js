import React, { Component } from "react";
import "./App.css";
import EmptyPlaceholder from "./components/EmptyPlaceholder";
import Header from "./components/Header";
import PlayerCard from "./components/PlayerCard";

class App extends Component {
  state = {
    players: [],
    count: 1,
  };

  handleAddPlyer = () => {
    this.setState((prevState) => {
      return {
        players: [
          ...prevState.players,
          {
            name: `Player #${prevState.count}`,
          },
        ],
        count: prevState.count + 1,
      };
    });
  };

  handleDeleteAll = () => {
    this.setState({ players: [] });
  };

  handleDeleteItem = (indexToDelete) => {
    this.setState((prevState) => {
      return {
        players: prevState.players.filter((item, index) => {
          if (indexToDelete === index) {
            return false;
          }
          return true;
        }),
      };
    });
  };

  render() {
    const { players } = this.state;
    return (
      <div className="App">
        <Header />
        <div className="bodyWrapper">
          <div className="container">
            {players.length > 0 ? (
              <div>
                <div className="statsWrapper">
                  <h4>Total players: {players.length}</h4>
                  <button
                    onClick={this.handleDeleteAll}
                    className="btn-primary"
                  >
                    Delete All
                  </button>
                </div>
                {players.map((item, index) => (
                  <PlayerCard
                    key={item.name}
                    playerIndex={index}
                    deleteFun={this.handleDeleteItem}
                    player={item}
                  />
                ))}
              </div>
            ) : (
              <EmptyPlaceholder />
            )}
            <button onClick={this.handleAddPlyer} className="btn-primary">
              Add player
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
