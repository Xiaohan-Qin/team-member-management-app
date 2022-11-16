require('dotenv').config();
const mysql = require('mysql');

// create mysql connection
const dbConn = mysql.createConnection({
  host: process.env.DB_HOST,
  user:  process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

// const dbConn = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',            // use your own username here
//   password: 'password',    // use your own password here
//   database: 'TeamMemberManagementApplication'
// });

// dbConn.connect(function (error) {
//   if (error) {
//     throw error;
//   }
//   console.log('Database Connected Successfully');
// })

dbConn.connect((error) => {
  if (error) {
    if (error.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('Database connection was closed.');
    }
    if (error.code === 'ER_CON_COUNT_ERROR') {
      console.error('Database has too many connections.');
    }
    if (error.code === 'ECONNREFUSED') {
      console.error('Database connection was refused.');
    }
  } else {
    console.log('Database connected successfully');
  }
});

module.exports = dbConn;