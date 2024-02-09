import React, {useState} from "react";

function Sushi({img, name, price, setPlates, plates, budget, setBudget}) {
  const [eaten, setEaten] = useState(false)
  function handleClick(event) {
    const eatenPrice = parseInt(event.target.alt)
    if (eatenPrice < budget) {
      setEaten(!eaten);
      setPlates([...plates, event.target.alt])
      setBudget(budget - price)
    }
  }
  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {/* Tell me if this sushi has been eaten! */}
        {eaten && budget>=price ? null : (
          <img
            src={img}
            alt={price}
            width="100%"
          />
        ) }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
