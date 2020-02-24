const Sequelize = require('sequelize'); 

// instance of sequelize 
const db = new Sequelize({
    database: 'codex-rest-shop',
    username: 'root',
    password: '', 
    dialect : 'mysql' 
}) ; 

module.exports = db ;