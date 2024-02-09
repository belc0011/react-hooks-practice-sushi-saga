import React, {useEffect, useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({plates, setPlates, budget, setBudget}) {
  const [sushis, setSushis] = useState([]);
  const [sushisToDisplay, setSushisToDisplay] = useState([])
  useEffect(() => {
    fetch('http://localhost:3001/sushis')
    .then(res => res.json())
    .then(data => {
      setSushis(data)
      setSushisToDisplay(data.slice(0, 4))})
  }, [])
  console.log(sushis);
  console.log(sushisToDisplay)
  return (
    <div className="belt">
      {(sushis.length>0) ? (sushisToDisplay.map((sushi) => {
        return <Sushi key={sushi.id} img={sushi.img_url} name={sushi.name} price={sushi.price} setPlates={setPlates} plates={plates} budget={budget} setBudget={setBudget}/>
      })) : <h2>Loading...</h2>}
      <MoreButton sushiData={sushis} displayedSushis={sushisToDisplay} setSushisToDisplay={setSushisToDisplay}/>
    </div>
  );
}

export default SushiContainer;
