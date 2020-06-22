import React, { Component } from "react";

class Signup extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <div className="card justify-content-center">
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <input
                      id="firstname"
                      type="text"
                      name="firstname"
                      value="First Name"
                      label="Firstname"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      id="lastname"
                      type="text"
                      name="lastname"
                      value="Last Name"
                      label="Lastname"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      id="username"
                      type="text"
                      name="username"
                      value="Username"
                      label="Username"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      id="email"
                      type="text"
                      name="email"
                      value="E-mail"
                      label="Email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      id="password"
                      type="text"
                      name="password"
                      value="Password"
                      label="Password"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      id="confirmPassword"
                      type="text"
                      name="confirmPassword"
                      value="Confirm Password"
                      label="ConfirmPassword"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    );
  }
}
export default Signup;
