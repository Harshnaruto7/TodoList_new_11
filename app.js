

const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const productRoutes = require('./routes/products');
const dotenv = require('dotenv');






dotenv.config();

const app = express();


// using Middleware

app.use(bodyParser.json());

// The Routes

app.use('/api/products',productRoutes);


// MongoDb connection

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));
    module.exports = app;































