//Create web Server
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const bodyParser = require('body-parser');

//Body Parser
app.use(bodyParser.urlencoded({ extended: true }));

//Set view engine to ejs
app.set('view engine', 'ejs');

//Set static files
app.use(express.static(path.join(__dirname, 'public')));

//Set routes
app.use(require('./routes/index'));
app.use(require('./routes/comments'));
app.use(require('./routes/users'));

//Start server
app.listen(port, () => console.log(`Server stated on port ${port}`));