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
  <p className="card-text">{props.gameDesc}</p>
    <a href="#" className="btn btn-primary" href={props.gameURL}>go to {props.gameName}'s character page?</a>
  </div>
</div>
  );
};
  

export default GameCard;
