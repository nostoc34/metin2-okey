import React from "react";
import CardFrame from "./CardFrame";
import Reset from "./Reset";
import { redCards, blueCards, yellowCards } from "./cards";

function AllCards() {
  return (
    <div>
      <div className="card-deck">{redCards.map(CardFrame)}</div>
      <div className="card-deck">{blueCards.map(CardFrame)}</div>
      <div className="card-deck">{yellowCards.map(CardFrame)}</div>
      <Reset />
    </div>
  );
}

export default AllCards;
