import React from 'react';
import PlantCard from './components/PlantCard.jsx'; // Assuming you have a PlantCard component
import '../src/App.css'

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="store-name">Smart Store</div>
        <div className="nav-icons">
          <div className="nav-icon" >
            <i className="fas fa-plus"></i> Create
          </div>
          <div className="nav-icon">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Search products..." className="search-input" />
          </div>
        </div>
      </nav>
      <PlantCard />
    </div>
  );
}

export default App;

