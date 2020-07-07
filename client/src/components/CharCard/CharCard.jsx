import React from "react";

const CharCard = (props) => {
  return (
    <div className="card justify-content-center" id="gameCard">
      <img className="card-img-top" src={props.charPic} alt={props.charName} />
      <div className="card-body">
        <h5 className="card-title">{props.charName}</h5>
        <p className="card-text">{props.charDesc}</p>
        <a className="btn btn-primary" href={props.charURL}>
          Go to {props.charName}'s character page?
        </a>
      </div>
    </div>
  );
};

export default CharCard;
