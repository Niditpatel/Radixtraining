import './App.css';
import {useState} from 'react';
import Helloworld from './components/Helloworld';

 

function App() {
  const [name,setName] = useState('Nidit');

  const handleChange= e =>{
    setName(e.target.value)
  }

  return (
    <>
    <Helloworld name={name}></Helloworld>
    <input type="text" onChange={handleChange} value={name} />
    </>
  );
}

export default App;
