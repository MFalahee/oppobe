//If not running production, then allow use of env variables for testing and such
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

//Dependencies
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

//setup port
const port = process.env.PORT || 3000;

//create app
const app = express();

//potentially threatening information for attackers apparently? Idk, lets disable it.
app.disable('x-powered-by');

app.use(helmet()); //Helmet is a security package that helps prevent some common attacks
app.use(cors()); //CORS is a package that helps prevent some common attacks
app.use(express.json()); //Express JSON is a package that helps with parsing JSON

if (module === require.main) {
  //Start the server
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

//Export
module.exports = app;