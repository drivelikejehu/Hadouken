import React, { Component } from 'react';
import ComboList from "../../../components/ComboList/ComboList"
class CharTemp extends Component {
    state = {
        char: "",
        combo1: "it's combo1",
            combo2: "flash step",
            combo3: "rising break"
    };
render() {
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col">
                    spacing
            </div>
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

export default CharTemp;