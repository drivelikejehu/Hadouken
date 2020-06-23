import React, { Component } from 'react';
import GameCard from "../../components/GameCard/GameCard.jsx";


class SF2 extends Component {
    state = {
        gamePic:
          "https://cdn.wikimg.net/en/strategywiki/images/c/c8/SSF2T_Guile.gif",
        gameName: "Guile",
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

export default SF2;