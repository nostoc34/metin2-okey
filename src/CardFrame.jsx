import React from "react";

function CardFrame(props) {

    function closeCard(card) {
        var selectedCard = card.currentTarget.id;
        console.log(selectedCard);
        document.getElementById(selectedCard).style.visibility = "hidden";
    }




  return (
    <div>
      <button onClick={closeCard} id={props.id} className={`card ${props.renk}`}>
        {props.no}
      </button>
    </div>
  );
}

export default CardFrame;
