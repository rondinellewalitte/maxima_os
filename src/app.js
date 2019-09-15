const express = require('express');
const mongoose = require('mongoose');

//App

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));



// Load models

const Maximaos = require('./models/maximaos');

// Load routes

const indexRoutes = require('./routes/index-routes');
app.use('/',indexRoutes);

const maximaosRoutes = require('./routes/maximaos-routes');
app.use('/maximaos', maximaosRoutes);




module.exports=app;