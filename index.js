const http = require('http');
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'password',
  database: 'sample'
});

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  connection.query(
    'SELECT id from `users`',
    function(err, results, fields) {
      res.statusCode = 200;
      res.setHeader('content-Type', 'text/plain');
      results.forEach((row) => {
        res.write(`id: ${row['id']}\n`)
      });
      res.end();
    }
  )
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});