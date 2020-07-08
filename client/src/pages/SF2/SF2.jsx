import React, { Component } from "react";
import Card from "../../components/Shared/Card/Card";

class SF2 extends Component {
  state = {
    searchTerm: "",
    charName: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  pageChanger = (event) => {
    window.location.href=`/sf2Guile`
  }

onSubmit = (event) => {
  event.preventDefault();
  console.log("testing to make sure this still works")
  this.setState({
    charName: this.props.title
  });
  this.pageChanger();
}

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
              src="https://vignette.wikia.nocookie.net/streetfighter/images/7/72/Sf-ryuold.gif/revision/latest?cb=20080211020008"
              title="Ryu"
              url="/SF2Ryu"
              desc="The Highlander"
              onClick={this.onSubmit}
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
