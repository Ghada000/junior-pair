const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;
const db = require('./database/index.js');


app.use(cors());

app.use(express.json());

app.get('/api/occasions', (req, res) => {
  db.getAllOccasions((error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send(error);
    } else {
      res.status(200).json(results);
    }
  });
});

app.get('/api/occasions/:name', (req, res) => {
  const { name } = req.params;
  db.getOneOccasion(name, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send(error);
    } else {
      res.status(200).json(results);
    }
  });
});

app.post('/api/occasions', (req, res) => {
  const newOccasions = req.body;
  db.postOccasion(newOccasions, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send(error);
    } else {
      res.status(201).json(results);
    }
  });
});

app.delete('/api/occasions/:id', (req, res) => {
  const { id } = req.params;
  db.deleteOccasion(id, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send(error);
    } else {
      res.status(200).json(results);
    }
  });
});

app.put('/api/occasions/:id', (req, res) => {
  const { id } = req.params;
  const updated = req.body;
  db.updateOccasion(id, updated, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send(error);
    } else {
      res.status(200).json(results);
    }
  });
});


app.get('/api/plants', (req, res) => {
    db.getAllPlants((error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send(error);
      } else {
        res.status(200).json(results);
      }
    });
  });
  
  app.get('/api/plants/:name', (req, res) => {
    const { name } = req.params;
    db.getOnePlant(name, (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send(error);
      } else {
        res.status(200).json(results);
      }
    });
  });
  
  app.post('/api/plants', (req, res) => {
    const newPlant = req.body;
    db.postPlant(newPlant, (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send(error);
      } else {
        res.status(201).json(results);
      }
    });
  });
  
  app.delete('/api/plants/:id', (req, res) => {
    const { id } = req.params;
    db.deletePlant(id, (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send(error);
      } else {
        res.status(200).json(results);
      }
    });
  });
  
  app.put('/api/plants/:id', (req, res) => {
    const { id } = req.params;
    const updated = req.body;
    db.updatePlant(id, updated, (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send(error);
      } else {
        res.status(200).json(results);
      }
    });
  });

app.listen(port, () => {
  console.log('Server listening on port', port);
});
	