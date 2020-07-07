import React, { Component } from "react";
import Card from "../../components/Shared/Card/Card"

class SF2 extends Component {
  state = {
    searchTerm: "",
    charName: ""
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

 handleClick = (event) => {
  console.log("this shit is confusing")
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
              src="https://cdn.wikimg.net/en/strategywiki/images/c/c8/SSF2T_Guile.gif"
              title="Guile"
              url="/SF2guile"
              desc="It's Guile. You know the man"
              onSubmit={this.handleClick}
            />
          </div>
          <div className="col-1"></div>
          <div className="col-3">
            <Card
              src="https://vignette.wikia.nocookie.net/streetfighter/images/7/72/Sf-ryuold.gif/revision/latest?cb=20080211020008"
              title="Ryu"
              url="/SF2Ryu"
              desc="Ryu. The Mario of SF2."
            />
          </div>
          <div className="col-1"></div>
          <div className="col-3">
            <Card
              src="https://cdn.wikimg.net/en/strategywiki/images/a/a4/SSF2T_Ken.gif"
              title="Ken"
              url="/SF2Ken"
              desc="Ken. You know the man"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <Card
              src="https://vignette.wikia.nocookie.net/streetfighter/images/9/93/ChunLi_breathe.gif/revision/latest?cb=20080212074238"
              title="Chun-Li"
              url="/SF2ChunLi"
              desc="It's Chun-Li. You know the woman"
            />
          </div>
          <div className="col-1"></div>
          <div className="col-3">
            <Card
              src="https://vignette.wikia.nocookie.net/streetfighter/images/c/c6/Classic-dhalsim.gif/revision/latest?cb=20080209063752"
              title="Dhalsim"
              url="/SF2Dhalsim"
              desc="Dhalsim. He's a zoner, with long limbs."
            />
          </div>
          <div className="col-1"></div>
          <div className="col-3">
            <Card
              src="https://vignette.wikia.nocookie.net/streetfighter/images/0/07/Zangief-sf2-s1.gif/revision/latest?cb=20080211044340"
              title="Zangief"
              url="/SF2Zangief"
              desc="Zangief. Big Russian Grappler."
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SF2;
