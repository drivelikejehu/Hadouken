import React, { Component } from 'react';
import CharCard from '../../components/CharCard/CharCard'


class SF2 extends Component {
    state = {
        searchTerm: ""
      };

      handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
          [name]: value,
        });
      };
      
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
                <CharCard charPic="https://cdn.wikimg.net/en/strategywiki/images/c/c8/SSF2T_Guile.gif" 
                charName="Guile"
                charURL="/SF2guile"
                charDesc="It's Guile. You know the man"/>
              </div>
              <div className="col-1"></div>
              <div className="col-3">
                <CharCard charPic="https://vignette.wikia.nocookie.net/streetfighter/images/7/72/Sf-ryuold.gif/revision/latest?cb=20080211020008" 
                charName="Ryu"
                charURL="/SF2Ryu"
                charDesc="Ryu. The Mario of SF2."/>
              </div> 
              <div className="col-1"></div>
              <div className="col-3">
                <CharCard charPic="https://cdn.wikimg.net/en/strategywiki/images/a/a4/SSF2T_Ken.gif" 
                charName="Ken"
                charURL="/SF2Ken"
                charDesc="Ken. You know the man"/>
              </div>
            </div>
            <div className="row">
                
              <div className="col-3">
                <CharCard charPic="https://vignette.wikia.nocookie.net/streetfighter/images/9/93/ChunLi_breathe.gif/revision/latest?cb=20080212074238" 
                charName="Chun-Li"
                charURL="/SF2ChunLi"
                charDesc="It's Chun-Li. You know the woman"/>
              </div>
              <div className="col-1"></div>
              <div className="col-3">
                <CharCard charPic="https://vignette.wikia.nocookie.net/streetfighter/images/c/c6/Classic-dhalsim.gif/revision/latest?cb=20080209063752" 
                charName="Dhalsim"
                charURL="/SF2Dhalsim"
                charDesc="Dhalsim. He's a zoner, with long limbs."/>
              </div> 
              <div className="col-1"></div>
              <div className="col-3">
                <CharCard charPic="https://vignette.wikia.nocookie.net/streetfighter/images/0/07/Zangief-sf2-s1.gif/revision/latest?cb=20080211044340" 
                charName="Zangief"
                charURL="/SF2Zangief"
                charDesc="Zangief. Big Russian Grappler."/>
              </div>
            </div>
          </div>
        );
      }
    }
    
export default SF2;