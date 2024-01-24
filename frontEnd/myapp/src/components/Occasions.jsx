import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Occasions() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/api/occasions')
      .then((response) => {
        setData(response.data);
        setError(null);
      })
      .catch((error) => {
        console.error(error);
        setError("Error fetching data");
      });
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      {data.map((item) => (
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
