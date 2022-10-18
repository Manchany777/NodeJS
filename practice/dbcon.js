var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',    // 호스트 주소
  user     : 'root',           // mysql user
  password : '1231',       // mysql password
  database : 'madang'         // mysql 데이터베이스
});
connection.connect();

// connection.query('SELECT 1 + 1 AS solution', 
// function (error, results, fields) {
//   if (error) throw error;
//   console.log(results);
//   console.log('The solution is: ', results[0].solution);
// });

connection.query('select * from orders where orderid = 1', 
function (error, results, fields) {
  if (error) throw error;
  // console.log(results);
  console.log('The solution is: ', results[0].orderdate);

});

connection.end();