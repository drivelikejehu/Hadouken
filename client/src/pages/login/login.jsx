import React, { Component } from "react";
class Login extends Component {
  render() {
    return (
      <div className="container" id="hadouken_contain">
        <h1>Welcome to Hadouken!</h1>
        <div className="row">
          <div className="col">
            <div class="card">
              <div class="card-body">
                <form>
                  <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" for="exampleCheck1">
                      I'm not a robot.
                    </label>
                  </div>
                  <div className="row justify-content-center">
                      <div className="col-3">
                      </div>
                    <div className="col-3">
                      <button type="submit" className="btn btn-primary">
                        Log In
                      </button>
                    </div>
                    <div className="col-3">
                      <button className="btn btn-primary">Sign Up</button>
                    </div>
                    <div className="col-3">
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
