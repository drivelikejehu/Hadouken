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
              src="https://www.fightersgeneration.com/games/sf2-fly.jpg"
              title="SF2"
              desc="The World Warriors"
              url="../SF2"
            />
          </div>
          <div className="col-2"></div>
          <div className="col-3">
            <Card
              src="https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Official_Tekken_7_Logo.jpg/220px-Official_Tekken_7_Logo.jpg"
              title="Tekken 7"
              desc="3D Mishima"
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
              title="DBFZ"
              desc="Cell's Revenge"
              url="../DBFZ"
            />
          </div>
          <div className="col-2"></div>
          <div className="col-3">
            <Card
              src="https://upload.wikimedia.org/wikipedia/en/thumb/5/50/Super_Smash_Bros._Ultimate.jpg/220px-Super_Smash_Bros._Ultimate.jpg"
              title="SSBU"
              desc="Now with more Min Min!"
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
