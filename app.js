const express = require('express');
const productsRoutes = require('./routes/products'); 
const app = express(); 
const db = require('./config/database');
const Product = require('./models/Product');
const bodyParser = require('body-parser');


// connection to my database
db.authenticate()
.then(() => console.log('authenticated'))
.catch((err) => console.log('error')); 

// create product table 
Product.sync()
.then(() => console.log('Product table created'))
.catch(() => console.log('error')) ; 

// convert body to application/json 
app.use(bodyParser.json());

app.use('/products' , productsRoutes);

app.use((req, res ,next) => { 
    return res.status(200).json({
        message: '404 not found'
    })
}) ; 

console.log('HELLO CODEX');

module.exports = app ;