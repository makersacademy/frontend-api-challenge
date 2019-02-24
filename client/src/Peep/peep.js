import React from "react";

const Peep = props => (
  <div className={props.className}>
    <p>{props.body}</p>
    <h4>{props.name}</h4>
    <h5>{props.timestamp}</h5>
  </div>
);

export default Peep;
