const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

var items = require('./routes/api/items');



var app = express();

//Bodyparser middleware

app.use(bodyParser.json());

//DB Config file
const db = require('./config/keys').mongoURI;

//connect to mongo

mongoose
.connect(db)
.then(() => console.log('mongoDB connected'))
.catch(err => console.log(err))

//Use routes
app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

