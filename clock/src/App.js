import React, { useState } from 'react'
import './App.css';

function App() {
  const state = useState();
  let time = new Date().toLocaleTimeString();
  const [ctime,setctime]=useState(time);
  const UpdateTime = () => {
     let Time = new Date().toLocaleTimeString();
   
    setctime(Time);
  }
  return (
    <div>
      <h1 className='time'><span>{ctime}</span></h1>
      <button className="button-container" onClick={UpdateTime}>Gettime</button>
    </div>
  );
}

export default App;
