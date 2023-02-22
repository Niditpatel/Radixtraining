import './App.css';
import { useState } from "react";
import GreaterNumber from "./components/GreaterNumber";

function App() {
  const [num1, setnum1] = useState();
  const [num2, setnum2] = useState()
  return (
    <div >
      <label>Enter First Number : </label>
      <input type='number'onChange={e=>setnum1(e.target.value)}></input><br></br><br></br>
      <label>Enter Second Number : </label>
      <input type='number'onChange={e=>setnum2(e.target.value)}></input><br></br><br></br>
      output :
      <GreaterNumber num1={num1} num2={num2} ></GreaterNumber>
    </div>
  );
}

export default App;
