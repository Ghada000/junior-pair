const express = require('express');
const cors = require('cors');
const plantRoutes = require('./database/plants/plantsRoutes.js');
// const occasionRoutes = require('./database/occasions/occasionsRoutes.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


app.use('/plantsAPI', plantRoutes);
// app.use('/occasions', occasionRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
