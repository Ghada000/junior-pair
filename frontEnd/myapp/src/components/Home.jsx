// AllPlants.jsx

import React from 'react';
import '../App.css';

function AllPlants() {
  return (
    <div className="all-plants-container">
      <h2></h2>
      <div className="flower-card">
        <img
          src="https://i.pinimg.com/236x/82/2f/63/822f636d4c965e9f14b0d6294eb8e80e.jpg"
          alt="Beautiful Flower"
          className="flower-image"
        />
        <h3>Rose</h3>
        <p>A symbol of love and romance.</p>
      </div>
      <div className="flower-card">
        <img
          src="https://via.placeholder.com/150"
          alt="Colorful Flower"
          className="flower-image"
        />
        <h3>Tulip</h3>
        <p>Known for its vibrant and diverse colors.</p>
      </div>
      {/* Add more flower cards as needed */}
    </div>
  );
}

export default AllPlants;
