import React, { Component } from "react";

class Games extends Component {
  render() {
    return (
      <div className="container text-center">
        <div className="row">
          <div className="col-md-4">
            <p>Games</p>
            <div class="dropdown show">
              <a
                class="btn btn-secondary dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Fighting Games
              </a>

              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" href="#">
                  Street Fighter II CE
                </a>
                <a class="dropdown-item" href="#">
                  Skullgirls
                </a>
                <a class="dropdown-item" href="#">
                  Dragon Ball Fighterz
                </a>
              </div>
            </div>
            <div className="card justify-content-center">
              <div className="card-body"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Games;
