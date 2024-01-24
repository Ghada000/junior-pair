import React , {useState,useEffect} from 'react'
import axios from 'axios'


function Occasions() {
const[data,setData]=useState([])
useEffect(() =>
  axios.get('http://localhost:8080/api/occasions')
    .then((response) => setData(response.data))
    .catch((error) => {
      console.log(error);
    }),
  []
);

  return (
    <div>
      {data.map((item)=>(
        <div key={item.id}>
            <img src={item.image}/>
          <h2>{item.name}</h2>
          <h3>{item.price}</h3>
          <h3>{item.description}</h3>
        
          


        </div>

      ))}


    </div>
  )
}

export default Occasions