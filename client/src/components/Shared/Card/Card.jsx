import React from "react";
import "./Card.css";

const Card = (props) => {

// handleClick = (event) => {
//   {props.onSubmit}
// }

  return (
    <div className="card justify-content-center">
      <img className="card-img-top" src={props.src} alt={props.title} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.desc}</p>
        <button className="btn btn-primary" 
        onClick={props.onSubmit}>
          {props.title}
        </button>
      </div>
    </div>
  );
};

export default Card;
