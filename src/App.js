import React, { useEffect, useState } from 'react';
import './App.css';
import Counter from './Components/Counter';

function App() {
  const [show, setShow] = useState(false) 
  const [count, setCount] = useState(0)
  const handleShow = () =>{
setShow(!show)
  }


useEffect(() => {
  document.title =`you click ${count} times`
},)

  return (
    <div className="App">
    

   <button onClick={()=>handleShow()}>{show? 'Masquer' : 'Afficher'}</button>
   <button onClick={()=>setCount(count+1)}>Counter</button>
    {show && < Counter />}
    </div>
  );
}

export default App;
