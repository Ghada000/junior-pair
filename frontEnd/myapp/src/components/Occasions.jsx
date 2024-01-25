
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Occasions() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/api/occasions')
      .then((response) => {
        setData(response.data);
        setFilteredData(response.data); 
        setError(null);
      })
      .catch((error) => {
        console.error(error);
        setError("Error fetching data");
      });
  }, []);

  
  useEffect(() => {
    const filtered = data.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  }, [data, searchQuery]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {error && <p>{error}</p>}
      {filteredData.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.name} />
          <h2>{item.name}</h2>
          <h3>{item.price}</h3>
          <h3>{item.description}</h3>
        </div>
      ))}
    </div>
  );
}

export default Occasions;
