import React, { Component } from "react";

class Account extends Component {
  state = {
    avatar: "",
    avatarUrl: "https://www.fillmurray.com/140/200",
    username: "",
    birthday: "",
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmitAvatar = (event) => {
    event.preventDefault();
    const avatarUrl = this.state.avatar;
    this.setState({
      avatar: "",
      avatarUrl: avatarUrl
    });
    console.log("Submit Avatar");
  };

  handleSubmitUsername = (event) => {
    event.preventDefault();
    this.setState({
      username: "",
    });
    console.log("Submit Username");
  };

  handleSubmitBirthday = (event) => {
    event.preventDefault();
    this.setState({
      birthday: "",
    });
    console.log("Submit Birthday");
  };

  render() {
    return (
      <>
        <div className="container" id="hadouken_contain">
          <div className="row">
            <div className="col-4">
              <img src={this.state.avatarUrl} alt="Placeholder" />
            </div>
            <div className="col-4">
              <div className="card justify-content-center">
                <div className="card-body">
                  <form className="form" onSubmit={this.handleSubmitAvatar}>
                    <input
                      id="avatar"
                      type="text"
                      name="avatar"
                      value={this.state.avatar}
                      placeholder="Enter new Avatar url"
                      onChange={this.handleInputChange}
                    />
                    <button className="btn btn-primary">Submit</button>
                  </form>
                  <form className="form" onSubmit={this.handleSubmitUsername}>
                    <input
                      id="username"
                      type="text"
                      name="username"
                      value={this.state.username}
                      placeholder="Enter new username"
                      onChange={this.handleInputChange}
                    />
                    <button className="btn btn-primary">Submit</button>
                  </form>
                  <form className="form" onSubmit={this.handleSubmitBirthday}>
                    <input
                      id="birthday"
                      type="text"
                      name="birthday"
                      value={this.state.birthday}
                      placeholder="Enter new birthday"
                      onChange={this.handleInputChange}
                    />
                    <button className="btn btn-primary">Submit</button>
                  </form>
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
