import './App.css';
import Profile from './components/Profile'
import {useState} from 'react'

function App() {
  const [name, setname] = useState('');
 const callback=(data)=>{
    setname(data);
  }
  return (
    <div className="App ">
      <h1 className='capitalize text-xl mb-3'>Child to parent </h1>
      <Profile handlecallback={callback}></Profile>
      {name &&
      <p className='capitalize mt-4 text-xl'> hello {name}</p>
      }
    </div>
  );
}

export default App;
