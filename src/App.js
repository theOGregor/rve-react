import './App.css';
import React, {useState} from 'react';


function App() {
  const [returnedData, setReturnedData] = useState(['Hi There']);
  const getData = async (url) => {
    const newData = await fetch(url, {
      method: "GET",
      headers: {
        'content-type': 'application/json',
        'Acept': 'application/json'
      }
    })
    .then(res => res.json());
    console.log(newData);
    setReturnedData(newData.result)
  }


  return (
    <div className="App">
      <button onclick={() => getData('/quit')}>Click</button>
      {returnedData}
    </div>
  );
}

export default App;
