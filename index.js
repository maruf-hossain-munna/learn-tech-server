const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const port = process.env.PORT || 5000;

const allCategories = require('./data/categories.json');

app.get('/', (req, res) =>{
    res.send(' Learn tech server  is running');
})

app.get('/categories', (req, res) =>{
    res.send(allCategories);
})

app.listen( port,  () =>{
    console.log('This server running on port', port);
})