// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'userrestaurante',
  database: 'restaurante',
  password: 'a1b2c3',
  port: 3307
});

module.exports = connection;