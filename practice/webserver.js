const express = require('express')
const mysql      = require('mysql');
const app = express()
const port = 3000

const connection = mysql.createConnection({
  host     : 'localhost',        // 호스트 주소
  user     : 'root',           // mysql user
  password : '1231',           // mysql password
  database : 'madang'            // mysql 데이터베이스
});
connection.connect();
//connection.end();

app.get('/login', (req, res) => {
  res.send('this is login page')
})

app.get('/booklist', (req, res) => {
    connection.query('SELECT 1 + 1 AS solution', 
        function (error, results, fields) {
            if (error) throw error;
            console.log('The solution is: ', results[0].solution);
        });
    res.send('this is booklists from madang')
  })

app.get('/', (req, res) => {
    res.send('Hello World!  -- express')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})