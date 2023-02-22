import { useState } from "react";
 function Myforms() {
    const [name, setname] = useState('')
    function handlesubmit (){
        console.log('A name is submitted' + name);
    }
    return (
        <form onSubmit={e=>{e.preventDefault(); handlesubmit()}}>
            <label>Name : </label>
            <input type='text' value={name} onChange={e=>{e.preventDefault();setname(e.target.value)}} ></input>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default Myforms;