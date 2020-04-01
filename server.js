const express = require('express');
const mongoose = require('mongoose');
//to get data from the body in the post/ get requests
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;

//Connect to MongoDB
mongoose
.connect(db)
.then(() => console.log('Mongo DB Connected...!'))
.catch(err => console.log(err));

//Use Route

app.use('/api/items.js', items);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

 