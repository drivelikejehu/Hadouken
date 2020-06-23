import React, { Component } from "react";
import GameCard from "../../components/GameCard/GameCard.jsx"

class Games extends Component {
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
            <div className="col-2">spacing</div>
          <div className="col-3">
            <GameCard gamePic="https://upload.wikimedia.org/wikipedia/en/f/f5/Street_Fighter_II_Dash_%28flyer%29.png" 
            gameName="SF2 CE"
            gameDesc="Street Fighter 2. you know what this is."
            gameURL="../SF2"
            />
            </div>
            <div className="col-2">s p a c e</div>
            <div className="col-3">
            <GameCard gamePic="https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Official_Tekken_7_Logo.jpg/220px-Official_Tekken_7_Logo.jpg" 
            gameName="Tekken 7"
            gameDesc="Tekken 7 is a 3d fighter bro"
            gameURL="../Tekken7"
            />
            </div>
            <div className="col-2">spacing</div>
        </div>
        <div className="row">
            <div className="col-2">spacing</div>
          <div className="col-3">
            <GameCard gamePic="https://upload.wikimedia.org/wikipedia/en/thumb/a/ad/DBFZ_cover_art.jpg/220px-DBFZ_cover_art.jpg" 
            gameName="Dragon Ball Fighterz"
            gameDesc="cell is mad annoying"
            gameURL="../DBFZ"
            />
            </div>
            <div className="col-2">s p a c e</div>
            <div className="col-3">
            <GameCard gamePic="https://upload.wikimedia.org/wikipedia/en/thumb/5/50/Super_Smash_Bros._Ultimate.jpg/220px-Super_Smash_Bros._Ultimate.jpg" 
            gameName="SSBU"
            gameDesc="Super Smash Bros. Ultimate, has Min Min now!"
            gameURL="../SSBU"
            />
            </div>
            <div className="col-2">spacing</div>
        </div>
      </div>
    );
  }
}

export default Games;
