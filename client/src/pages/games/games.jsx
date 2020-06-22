import React, { Component } from "react";

class Games extends Component {
  render() {
    return (
      <div className="container text-center">
        <div className="row">
          <div className="col">
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
          </div>
        </div>
      </div>
    );
  }
}

export default Games;
