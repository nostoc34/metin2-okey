import React from "react";

function Reset() {
  function resetCards() {
    for (var i = 0; i < document.querySelectorAll(".card").length; i++) {
      document.querySelectorAll(".card")[i].style.visibility = "visible";
    }
  }
  return (
    <button onClick={resetCards} className="reset-btn">
      RESET
    </button>
  );
}

export default Reset;
