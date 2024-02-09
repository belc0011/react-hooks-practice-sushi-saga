import React, {useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [plates, setPlates] = useState([])
  const [budget, setBudget] = useState(100)
  return (
    <div className="app">
      <SushiContainer plates={plates} setPlates={setPlates} budget={budget} setBudget={setBudget}/>
      <Table plates={plates} setPlates={setPlates} budget={budget} setBudget={setBudget}/>
    </div>
  );
}

export default App;
