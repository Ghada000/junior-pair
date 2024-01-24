import React from 'react';
import '../src/App.css'
import Occasions from './components/Occasions'
import Plants from './components/Plants';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
     <Plants/> 
    {/* <Occasions/>  */}
  </div>
  );
}

export default App;

