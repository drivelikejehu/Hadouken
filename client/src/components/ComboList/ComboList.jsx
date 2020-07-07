import React, { Component } from "react";

class ComboList extends Component {
  render() {
    return (
      <>
        <div className="row">
          <div className="col">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Saved Combos
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="#">
                  Combo 1
                </a>
                <a className="dropdown-item" href="#">
                  Combo 2
                </a>
                <a className="dropdown-item" href="#">
                  Combo 3
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <h3>Combo glossary</h3>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th>Name</th>
                  <th scope="col">Commands</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>test1</td>
                  <td>lk</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>test2</td>
                  <td>QCF-K,Rp</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>test3</td>
                  <td>dp, lk, rk</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-2"></div>
          <div className="col-7">
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">Combo Name</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div class="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default ComboList;
