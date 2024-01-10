
import './App.css';
import { useState } from 'react';

function App() {
  const [excuse, setExcuse] = useState("")
  return (
    <div className="App">
      <h1>Generate An excuse</h1>
      <button>Party</button><br></br>
      <button>Family</button>
      <button>Office</button>  
    </div>
  );
}

export default App;
