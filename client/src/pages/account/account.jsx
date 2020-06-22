import React, { Component } from "react";

class Account extends Component {

handleSubmitUsername = (event) => {
    event.preventDefault();
    console.log("this form is working yeet")
}

  render() {
    return (
      <div className="container" id="hadouken_contain">
        <div className="row">
          <div className="col-4">PLaceholder for Edit pic... pic?</div>
          <div className="col-6">Placeholder for edit pic dialogue</div>
          <div className="col-2">Placeholder for flexbox spacing</div>
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
              </div>
              <button
              className="btn btn-primary"
                type="submit"
                name="action"
                >
                    Submit
                </button>
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
