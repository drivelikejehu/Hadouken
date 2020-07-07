import React, { Component } from "react";
import Card from "../../components/Shared/Card/Card";

class SF2 extends Component {
  state = {
    searchTerm: "",
<<<<<<< HEAD
    charName: ""
=======
    charName: "",
>>>>>>> 2c4ae21d15871b9a40557360744e49d940c4cebb
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

<<<<<<< HEAD
 handleClick = (event) => {
  console.log("this shit is confusing")
    }
    
=======

>>>>>>> 2c4ae21d15871b9a40557360744e49d940c4cebb
  render() {
    return (
      <div className="container text-center">
        <form>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Please enter a fighter"
                  name="searchTerm"
                  value={this.state.searchTerm}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="col-sm-2">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col-3">
            <Card
<<<<<<< HEAD
              src="https://cdn.wikimg.net/en/strategywiki/images/c/c8/SSF2T_Guile.gif"
              title="Guile"
              url="/SF2guile"
              desc="It's Guile. You know the man"
              onSubmit={this.handleClick}
=======
              src="https://vignette.wikia.nocookie.net/streetfighter/images/7/72/Sf-ryuold.gif/revision/latest?cb=20080211020008"
              title="Ryu"
              url="/SF2Ryu"
              desc="The Highlander"
>>>>>>> 2c4ae21d15871b9a40557360744e49d940c4cebb
            />
          </div>
          <div className="col-3">
            <Card
              src="https://vignette.wikia.nocookie.net/streetfighter/images/f/f1/EHonda_breathe.gif/revision/latest?cb=20080212074417"
              title="E. Honda"
              url="/SF2Honda"
              desc="Edward"
            />
          </div>
          <div className="col-3">
            <Card
              src="https://vignette.wikia.nocookie.net/streetfighter/images/1/15/Sf-blankaold.gif/revision/latest?cb=20080209060758"
              title="Blanka"
              url="/SF2Blanka"
              desc="Blanquito"
            />
          </div>
          <div className="col-3">
            <Card
              src="https://vignette.wikia.nocookie.net/streetfighter/images/5/5c/Guile-oldstance.gif/revision/latest?cb=20080209192854"
              title="Guile"
              url="/SF2guile"
              desc="Army dude"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <Card
              src="https://vignette.wikia.nocookie.net/streetfighter/images/6/6b/Ken_breathe.gif/revision/latest?cb=20080212074601"
              title="Ken"
              url="/SF2Ken"
              desc="Family Man"
            />
          </div>
          <div className="col-3">
            <Card
              src="https://vignette.wikia.nocookie.net/streetfighter/images/9/93/ChunLi_breathe.gif/revision/latest?cb=20080212074238"
              title="Chun-Li"
              url="/SF2ChunLi"
              desc="The First Lady"
            />
          </div>
          <div className="col-3">
            <Card
              src="https://vignette.wikia.nocookie.net/streetfighter/images/0/07/Zangief-sf2-s1.gif/revision/latest?cb=20080211044340"
              title="Zangief"
              url="/SF2Zangief"
              desc="Muscle Power!"
            />
          </div>
          <div className="col-3">
            <Card
              src="https://vignette.wikia.nocookie.net/streetfighter/images/c/c6/Classic-dhalsim.gif/revision/latest?cb=20080209063752"
              title="Dhalsim"
              url="/SF2Dhalsim"
              desc="Floaty"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SF2;
