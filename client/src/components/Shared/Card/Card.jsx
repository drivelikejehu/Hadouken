import React from "react";

const Card = (props) => {
  return (
    <div className="card justify-content-center" id="gameCard">
      <img className="card-img-top" src={props.src} alt={props.alt} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <button className="btn btn-primary">props.title</button>
      </div>
    </div>
  );
};

export default Card;
