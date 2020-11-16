import React from 'react'
import './App.css';
import Map from './components/map/map';
import Form from "./components/form/form";

function App() {
  return (
    <div className="App">
      <Form/>
      <Map zoomLevel={12}/>
    </div>
  );
}

export default App;
