import React, { Component } from "react";

class Account extends Component {
  state = {};

  handleSubmitAvatar = (event) => {
    console.log("Submit Avatar");
  };

  handleSubmitUsername = (event) => {
    console.log("Submit Username");
  };

  handleSubmitBirthday = (event) => {
    console.log("Submit Birthday");
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <>
        <div className="container" id="hadouken_contain">
          <div className="row">
            <div className="col-4">
              <img src="https://www.fillmurray.com/140/200" alt="Placeholder" />
            </div>
            <div className="col-4">
              <div className="card justify-content-center">
                <div className="card-body">
                    <div className="form-group">
                      <input
                        id="avatar"
                        type="text"
                        name="avatar"
                        value="avatar"
                      />
                      <button className="btn btn-primary" onClick={this.handleSubmitAvatar}>Avatar</button>
                    </div>
                    <div className="form-group">
                      <input
                        id="username"
                        type="text"
                        name="username"
                        value="username"
                      />
                      <button className="btn btn-primary" onClick={this.handleSubmitUsername}>Username</button>
                    </div>
                    <div className="form-group">
                      <input
                        id="birthday"
                        type="text"
                        name="birthday"
                        value="birthday"
                      />
                      <button className="btn btn-primary" onClick={this.handleSubmitAvatar}>Birthday</button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Account;
