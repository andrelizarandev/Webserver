// Modules
const cors = require('cors');
const express = require('express');

// Routers 
const router = require('./routes/index');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/values', router);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server running on port ${port}`));