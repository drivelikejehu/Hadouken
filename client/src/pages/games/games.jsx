import React, { Component } from "react";
import GameCard from "../../components/GameCard/GameCard.jsx";

class Games extends Component {
  state = {
    gamePic:
      "https://upload.wikimedia.org/wikipedia/en/f/f5/Street_Fighter_II_Dash_%28flyer%29.png",
    gameName: "SF2 CE",
  };
  render() {
    return (
      <div className="container text-center">
        <form>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Please enter employee search criteria"
                  name="searchTerm"
                  value="search term"
                />
              </div>
            </div>
            <div className="col-sm-2">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col">
            <GameCard gamePic={this.state.gamePic} gameName={this.state.gameName} />
          </div>
        </div>
      </div>
    );
  }
}

export default Games;
