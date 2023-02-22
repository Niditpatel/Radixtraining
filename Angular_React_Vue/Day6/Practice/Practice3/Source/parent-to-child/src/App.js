import './App.css';
import { useState } from 'react';
import  Dispaly  from "./components/Display";
function App() {
const [name, setname] = useState('')
  return (
    <>
    <label className='text-xl'>Name : </label>
    <input type="text" className='border border-black px-1' onChange={e=>setname(e.target.value)} />
    <Dispaly Name={name}></Dispaly>
    </>
  );
}

export default App;
