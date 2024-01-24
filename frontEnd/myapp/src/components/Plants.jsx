
  // import React, { useState, useEffect } from 'react';
  // import axios from 'axios';
  // import '../App.css';

  // function Plants() {
  //   const [data, setData] = useState([]);
  //   const [name, setName] = useState('');
  //   const [price, setPrice] = useState('');
  //   const [description, setDescription] = useState('');
  //   const [image, setImage] = useState('');
  //   const [category, setCategory] = useState('');
  //   const [editingId, setEditingId] = useState(null);
  //   const [input, setInput] = useState(false);

  //   useEffect(() => {
  //     axios.get('http://localhost:8080/api/plants')
  //       .then((response) => {
  //         console.log(response.data); 
  //         setData(response.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }, []);
    

  //   const handlePost = () => {
  //     const newPlant = {
  //       name: name,
  //       price: price,
  //       description: description,
  //       image: image,
  //       category: category
      
        
  //     };

  //     axios.post('http://localhost:8080/api/plants', newPlant)
  //       .then(res => {
  //         console.log(res.data);
  //         setName('');
  //         setPrice('');
  //         setDescription('');
  //         setImage('');
  //         setCategory('');
          
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   };

  //   const handleDelete = (id) => {
  //     axios.delete(`http://localhost:8080/api/plants/${id}`)
  //       .then(() => {
  //         const updatedData = data.filter(item => item.id !== id);
  //         setData(updatedData);
  //       })
  //       .catch(error => console.log(error));
  //   }
  //    const handleUpdateClick = (id) => {
  //   setEditingId(id);
  // }
  //   const handleUpdate = (id) => {
  //     axios.put(`http://localhost:8080/api/plants/${id}`, {
  //       name: name,
  //       category: category,
  //       description: description,
  //       price: price,
  //       image: image
  //     })
  //       .then(() => {
  //         const updatedData = data.map(item => {
  //           if (item.id === id) {
  //             return {
  //               ...item,
  //               name: name,
  //               category: category,
  //               description: description,
  //               price: price,
  //               image: image
  //             };
  //           }
  //           return item;
  //         });
  //         ;
  //         setData(updatedData);
  //         setEditingId(null);
  //         setName('');
  //         setCategory('');
  //         setPrice('');
  //         setImage('');
  //         setDescription('');
  //       })
  //       .catch(err => console.log(err));
  //   }

  // return (
  //   <div>
  //       <div className="add-container">
  //   <button onClick={() => setInput(true)}>Tap to add</button>
  //   {input && (
  //     <div className="input-fields">
  //       <input
  //         placeholder="Name"
  //         value={name}
  //         onChange={(event) => setName(event.target.value)}
  //       />
  //       <input
  //         placeholder="ImageUrl"
  //         value={image}
  //         onChange={(event) => setImage(event.target.value)}
  //       />
        
  //         <input
  //         placeholder="description"
  //         value={description}
  //         onChange={(event) => setDescription(event.target.value)}

  //       />
  //        <input
  //         placeholder="category"
  //         value={description}
  //         onChange={(event) => setCategory(event.target.value)}

  //       />
  //        <input
  //         placeholder="price"
  //         value={description}
  //         onChange={(event) => setPrice(event.target.value)}

  //       />
  //     </div>
  //   )}
  //   {name && image && description &&(
  //     <button onClick={handleUpdate}>add new flower</button>
  //   )}
  // </div>
      
  //     {data.map((item) => (
  //       <div key={item.id}>
  //         <h2>{item.name}</h2>
  //         <h2>{item.description}</h2>
  //         <h2>{item.price}</h2>
  //         <h2>{item.category}</h2>
  //         <img src={item.image} alt={`Article ${item.id}`} />

  //         {editingId === item.id ? (
  //           <>
  //             <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
  //             <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
  //             <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
  //             <button onClick={() => handleUpdate(item.id)}>Update</button>
  //           </>
  //         ) : (
  //           <button onClick={() => handleUpdateClick(item.id)}>Update</button>
  //         )}

  //         <button onClick={() => handleDelete(item.id)}>Delete</button>
  //       </div>
  //     ))}
      

  //   </div>
  // );}
  // export default Plants;

  import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

function Plants() {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [input, setInput] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8080/api/plants')
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handlePost = () => {
    const newPlant = {
      name: name,
      price: price,
      description: description,
      image: image,
      category: category
    };

    axios.post('http://localhost:8080/api/plants', newPlant)
      .then(res => {
        console.log(res.data);
        setName('');
        setPrice('');
        setDescription('');
        setImage('');
        setCategory('');
        setInput(false); // Reset input state after adding a new plant
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/api/plants/${id}`)
      .then(() => {
        const updatedData = data.filter(item => item.id !== id);
        setData(updatedData);
      })
      .catch(error => console.log(error));
  }

  const handleUpdateClick = (id) => {
    setEditingId(id);
  }

  const handleUpdate = (id) => {
    axios.put(`http://localhost:8080/api/plants/${id}`, {
      name: name,
      category: category,
      description: description,
      price: price,
      image: image
    })
      .then(() => {
        const updatedData = data.map(item => {
          if (item.id === id) {
            return {
              ...item,
              name: name,
              category: category,
              description: description,
              price: price,
              image: image
            };
          }
          return item;
        });
        setData(updatedData);
        setEditingId(null);
        setName('');
        setCategory('');
        setPrice('');
        setImage('');
        setDescription('');
      })
      .catch(err => console.log(err));
  }

  return (
    <div>
      <div className="add-container">
        <button onClick={() => setInput(true)}>Tap to add</button>
        {input && (
          <div className="input-fields">
            <input
              placeholder="Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <input
              placeholder="ImageUrl"
              value={image}
              onChange={(event) => setImage(event.target.value)}
            />
            <input
              placeholder="Description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
            <input
              placeholder="Category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            />
            <input
              placeholder="Price"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
          </div>
        )}
        {name && image && description && category && price && (
          <button onClick={handlePost}>Add new flower</button>
        )}
      </div>

      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <h2>{item.description}</h2>
          <h2>{item.price}</h2>
          <h2>{item.category}</h2>
          <img src={item.image} alt={`Article ${item.id}`} />

          {editingId === item.id ? (
            <>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
              <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
              <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
              <button onClick={() => handleUpdate(item.id)}>Update</button>
            </>
          ) : (
            <button onClick={() => handleUpdateClick(item.id)}>Update</button>
          )}

          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Plants;
