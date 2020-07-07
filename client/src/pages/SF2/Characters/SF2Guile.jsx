import React, { Component } from "react";
import ComboList from "../../../components/ComboList/ComboList";
class SF2Guile extends Component {
  state = {
    char: "Guile",
    combo1: "it's combo1",
    combo2: "flash step",
    combo3: "rising break",
  };
  render() {
    return (
      <div className="container text-center">
        <div className="row">
          <div className="col">duh nuh nuh na na</div>
        </div>
        <ComboList
          combo1={this.state.combo1}
          combo2={this.state.combo2}
          combo3={this.state.combo3}
          char={this.state.char}
        />
      </div>
    );
  }
}

export default SF2Guile;
