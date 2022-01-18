const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

// Initializationes 
const app = express();
require("dotenv").config();

// Configuration
mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.njadq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
    .then(() => console.log('⚡ DB Connected successfully!'))
    .catch((err) => console.log('📛 DB Error : ',err));
app.set('port', process.env.PORT || 5000);

// Body parser let data pass to the body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/user', require('./routes/user'));

// Starting the server
app.listen(app.get('port'), ()=>{
    console.log(`🚀 Server started at ${app.get('port')}`);
});