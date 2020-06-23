import React, { Component } from "react";

class Account extends Component {

handleSubmittedAvatar = (event) => {
    event.preventDefault();
    console.log("edit pic is actually logging m8")
}

handleSubmitUsername = (event) => {
    event.preventDefault();
    console.log("this form is working yeet")
}

handleSubmitBirthday = (event) => {
    event.preventDefault();
    console.log("birthday, it's yo birthday")
}

  render() {
    return (
      <div className="container" id="hadouken_contain">
        <div className="row">
          <div className="col-4"><img src="https://www.fillmurray.com/140/200" alt="Placeholder"/></div>
          <div className="col-4"><form onSubmit={this.handleSubmittedAvatar}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Edit Avatar"
                  aria-label="Avatar Edit Button"
                  aria-describedby="Avatar Edit Button"
                />
                <div className="input-group-append">
                <button className="btn btn-primary" type="submit" name="action">Submit</button>
                </div>
              </div>
            </form>
            </div>
          <div className="col-4"></div>
        </div>
        <div className="row">
          <div className="col-4"></div>
          <div className="col">
            <form onSubmit={this.handleSubmitUsername}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Edit Username"
                  aria-label="Username Edit Button"
                  aria-describedby="Username Edit Button"
                />
                <div className="input-group-append">
                <button className="btn btn-primary" type="submit" name="action">Submit</button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-4"></div>
        </div>
        <div className="row">
        <div className="col-4"></div>
          <div className="col">Birthday</div>
          <div className="col-4"></div>
        </div>
        <div className="row">
            <div className="col-4"></div>
          <div className="col">
              <form onSubmit={this.handleSubmitBirthday}>
          <div className="input-group mb-3">
              <input type="date" name="birthday" id="birthday_thing"/>
              </div>
              <div className="input-group-append">
                <button className="btn btn-primary" type="submit" name="action">Submit</button>
                </div>
          </form>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    );
  }
}

export default Account;
