import React from "react";

const GameCard = (props) => {
  return (
    <div className="card justify-content-center" id="gameCard">
     <img className="card-img-top"
        src={props.gamePic}
        alt={props.gameName}
      />
      <div className="card-body">
    <h5 className="card-title">{props.gameName}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
  );
};
  

export default GameCard;
