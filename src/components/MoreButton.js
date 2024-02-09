import React from "react";

function MoreButton({sushiData, displayedSushis, setSushisToDisplay}) {
  function handleClick(event) {
    setSushisToDisplay(sushiData.slice(4, 8))
  }
  return <button onClick={handleClick}>More sushi!</button>;
}

export default MoreButton;
