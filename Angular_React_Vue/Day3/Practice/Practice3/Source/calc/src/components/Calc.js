import { useState } from "react";
import './Calc.css'

function Calc(props) {
    const [Result, setResult] = useState();

    const handleCalc = (e) => {
        e.preventDefault();
        switch (props.Opr) {
            case '+':
                setResult((parseFloat(props.num1) + parseFloat(props.num2)).toFixed(2));
                break;
            case '-':
                setResult((parseFloat(props.num1) - parseFloat(props.num2)).toFixed(2));
                break;
            case '*':
                setResult((parseFloat(props.num1) * parseFloat(props.num2)).toFixed(2));
                break;
            case '/':
                setResult((parseFloat(props.num1) / parseFloat(props.num2)).toFixed(2));
                break;
            default:
                alert("select valid operation")
                break;
        }
    }
    return (
        <>
            <button onClick={handleCalc} class='c-btn'>=</button>
        <h3>Output : {Result}</h3>
        </>

    )

}

export default Calc;