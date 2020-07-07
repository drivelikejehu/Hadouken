import React, { Component } from "react";
import Card from "../../components/Shared/Card/Card";

class Games extends Component {
  state = {};

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
          <div className="col-2"></div>
          <div className="col-3">
            <Card
              src="https://upload.wikimedia.org/wikipedia/en/f/f5/Street_Fighter_II_Dash_%28flyer%29.png"
              title="SF2 CE"
              desc="Street Fighter 2. you know what this is."
              url="../SF2"
            />
          </div>
          <div className="col-2"></div>
          <div className="col-3">
            <Card
              src="https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Official_Tekken_7_Logo.jpg/220px-Official_Tekken_7_Logo.jpg"
              title="Tekken 7"
              desc="Tekken 7 is a 3d fighter bro"
              url="../Tekken7"
            />
          </div>
          <div className="col-2"></div>
        </div>
        <div className="row">
          <div className="col-2"></div>
          <div className="col-3">
            <Card
              src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ad/DBFZ_cover_art.jpg/220px-DBFZ_cover_art.jpg"
              title="Dragon Ball Fighterz"
              desc="cell is mad annoying"
              url="../DBFZ"
            />
          </div>
          <div className="col-2"></div>
          <div className="col-3">
            <Card
            src="https://upload.wikimedia.org/wikipedia/en/thumb/5/50/Super_Smash_Bros._Ultimate.jpg/220px-Super_Smash_Bros._Ultimate.jpg" 
              title="SSBU"
              desc="Super Smash Bros. Ultimate, has Min Min now!"
              url="../SSBU"
            />
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    );
  }
}

export default Games;
