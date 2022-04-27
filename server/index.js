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

//Middleware
app.use(helmet()); //Helmet is a security package that helps prevent some common attacks
app.use(cors()); //CORS is a security package that helps prevent some common attacks
app.use(express.json()); //Express JSON is a package that helps with parsing JSON
// app.use(require('./middleware/errorHandler')); //Error handler middleware

//Routers
const rootRoute = require('./routes/rootRoute');
const apiRoute = require('./routes/apiRoute');
// const userRoute = require('./routes/userRoute'); Future example

app.use('/api', apiRoute);
app.use('/', rootRoute);
//Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}, in ${process.env.NODE_ENV} mode`);
    // console.log(`NODE_ENV is ${process.env.NODE_ENV}`);
    // console.log(`PORT is ${process.env.PORT}`);
    // console.log(`API_KEY is ${process.env.GMAP_API_KEY}`);
});


//Export

module.exports = app;