import React from "react";

function Display(props) {
  return (
    <div>
      <h1>Display Board</h1>
      <h2>Balls: {props.balls}</h2>
      <h2>Strikes: {props.strikes}</h2>
    </div>
  );
}

export default Display;
