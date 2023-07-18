//Create web Server

const express = require('express');
const app = express();
const port = 3000;

//import the routes
const routes = require('./routes');
const cors = require('cors');

//import the db connection
const db = require('./config/db');

//import the model
const Comment = require('./models/Comment');

//import the body parser
const bodyParser = require('body-parser');

//import the cors
app.use(cors());

//use the body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//connect to the db
db.authenticate()
    .then(() => console.log('Database connected successfully'))
    .catch(err => console.log('Error: ' + err))

//define the routes
app.use('/', routes);

//start the server
app.listen(port, () => console.log(`Server running on port ${port}`));