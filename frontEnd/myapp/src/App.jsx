import React ,  {useState}from 'react';
import '../src/App.css'
import Occasions from './components/Occasions'
import Plants from './components/Plants';
import Nav from './components/Nav';
import Home from './components/Home.jsx'

function App() {
  // const[view,setView]=useState("Home")
  // const changeView = (newView)=>{
  //   setView(newView)
  // }
  return (
    <div className="App">
      {/* <Nav changeView={changeView}/>
      {view==="Home"&& <Home/>}
      {view==="Occasions"&& <Occasions />}
      {view==="Plants"&& <Plants/>} */}
      
    {/* <Occasions/>  */}
    <Nav/>
    <Plants/>
      
    {/* <Home/>  */}
  </div>
  );
}

export default App;

