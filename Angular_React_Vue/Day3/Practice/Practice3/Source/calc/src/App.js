import { useState } from 'react'
import Calc from './components/Calc'
import './App.css'
function App() {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [Opr, setOpr] = useState()
  return (
    <div class='body'>
      <fieldset>
        <legend>
          <h2>Calc</h2>
        </legend>
        <label for="num1">Enter First Number : </label>
        <input type='number' id='num1' onChange={e => setNum1(e.target.value)}></input><br></br><br></br>
        <label for="num2">Enter First Number : </label>
        <input type='number' onChange={e => setNum2(e.target.value)}></input><br></br><br></br>
        <span class="calc-btns">
        <button value={'+'} class="btn" onClick={e => setOpr(e.target.value)}>+</button>
        <button value={'-'} class="btn" onClick={e => setOpr(e.target.value)}>-</button>
        <button value={'*'} class="btn" onClick={e => setOpr(e.target.value)}>*</button>
        <button value={'/'} class="btn" onClick={e => setOpr(e.target.value)}>/</button>
        </span>
        
        <Calc num1={num1} num2={num2} Opr={Opr} />
      </fieldset>

    </div>
  );
}

export default App;
