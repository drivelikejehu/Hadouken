import React, { Component } from "react";

class Account extends Component {
<<<<<<< HEAD
    render() {
        return (
            <div>
                account
=======

handleSubmittedAvatar = (event) => {
    event.preventDefault();
    console.log("edit pic is actually logging m8")
}

handleSubmitUsername = (event) => {
    event.preventDefault();
    console.log("this form is working yeet")
}

  render() {
    return (
      <div className="container" id="hadouken_contain">
        <div className="row">
          <div className="col-4">Placeholder for Edit pic... pic?</div>
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
>>>>>>> 19a404b6ae8bd14593baa3bfc24ac8f936614249
            </div>
          <div className="col-4">Placeholder for flexbox spacing</div>
        </div>
        <div className="row">
          <div className="col-4">spacing</div>
          <div className="col">
            <form onSubmit={this.handleSubmitUsername}>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    @
                  </span>
                </div>
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
          <div className="col-4">spacing</div>
        </div>
        <div className="row">
          <div className="col">placeholder for Birthday</div>
        </div>
        <div className="row">
          <div className="col">placeholder for birthday input</div>
        </div>
      </div>
    );
  }
}

export default Account;
