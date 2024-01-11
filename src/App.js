
import './App.css';
import { useState } from 'react';
import Axios from "axios";

function App() {
  const [generatedExcuse, setGeneratedExcuse] = useState("")
  const fetchExcuse = (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then((res) => {
      setGeneratedExcuse(res.data[0].excuse);
    } 
   
    );
  };
  return (
    <div className="App">
      <h1>Generate An excuse</h1>
      <p>click the buttons below to generate excuses for party, family and Office</p>
      <button onClick={() => fetchExcuse("party")}>Party</button><br />
      <button onClick={() => fetchExcuse("family")}>Family</button><br />
      <button onClick={() => fetchExcuse("Office")}>Office</button>  

      <p>{generatedExcuse}</p>
    </div>
  );
}

export default App;

