const db = require('../config/database');
const sequelize = require('sequelize'); 

const Product = db.define('product' , {
    name : {
        type: sequelize.STRING
    } , 
    price :{
        type: sequelize.DOUBLE
    }
}); 

module.exports = Product; 