const express = require('express');

const expressConfig = require('./config/expressConfig');
const dbConnect = require('./config/dbConfig');

const app = express();
const PORT = 3000;

expressConfig(app);

dbConnect()
.then(() => console.log('DB connected'))
.catch(err => console.log(err))

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))