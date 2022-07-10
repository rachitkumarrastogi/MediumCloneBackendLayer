const mysql = require('mysql')
const connection = mysql.createConnection({

  host: 'localhost',
  
  // specify the User that you've in your mySQL connection.
  user: 'root',

  // specify the Password that you've in your mySQL connection.
  password: 'admin123',

  // specify the database that you've created in mySQL and would like to access in JS.
  database: 'studentdb'
})

// draws the connection to database
connection.connect()


connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
  if (err) console.log('There is a Error: '+err)
 else  console.log('The solution is: ', rows[0].solution)
})

// connection.query("SELECT * FROM users")

connection.end()