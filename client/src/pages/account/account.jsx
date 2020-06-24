import React, { Component } from "react";

class Account extends Component {
  state = {
    avatar: "",
    username: "",
    birthday: "",
  };

  handleSubmitAvatar = (event) => {
    event.preventDefault();
    this.setState({
      avatar: ""
    })
    console.log("Submit Avatar");
  };

  handleSubmitUsername = (event) => {
    event.preventDefault();
    this.setState({
      username: ""
    })
    console.log("Submit Username");
  };

  handleSubmitBirthday = (event) => {
    event.preventDefault();
    this.setState({
      birthday: ""
    })
    console.log("Submit Birthday");
  };

  handleInputChange = (event) => {
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
                  <div className="form">
                    <input
                      id="avatar"
                      type="text"
                      name="avatar"
                      value={this.state.avatar}
                      placeholder="Change you avatar"
                      onChange={this.handleInputChange}
                    />
                    <button
                      className="btn btn-primary"
                      onClick={this.handleSubmitAvatar}
                    >
                      Submit
                    </button>
                  </div>
                  <div className="form">
                    <input
                      id="username"
                      type="text"
                      name="username"
                      value={this.state.username}
                      placeholder="Enter new username"
                      onChange={this.handleInputChange}
                    />
                    <button
                      className="btn btn-primary"
                      onClick={this.handleSubmitBirthday}
                    >
                      Submit
                    </button>
                  </div>
                  <div className="form">
                    <input
                      id="birthday"
                      type="text"
                      name="birthday"
                      value={this.state.birthday}
                      placeholder="Enter new birthday"
                      onChange={this.handleInputChange}
                    />
                    <button
                      className="btn btn-primary"
                      onClick={this.handleSubmitAvatar}
                    >
                      Submit
                    </button>
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
