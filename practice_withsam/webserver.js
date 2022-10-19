const express = require('express')  // 노드js에서 웹프레임워크를 사용하기 위해 express 라이브러리를 가져온다.
const mysql  = require('mysql'); // nodejs에서 mysql db에 접속하기 위해 필요한 모듈 mysql을 가져온다.

const app = express()   // 웹서버 instance를 생성한다.
const port = 3300
const connection = mysql.createConnection({  // mysql db에 접속하기 위한 접속정보를 저장한다.
  host     : 'localhost',    // 호스트 주소
  user     : 'root',       // mysql user
  password : '1231',         // mysql password
  database : 'madang'        // mysql 데이터베이스
});
connection.connect();  // 데이터베이스 접속정보를 가지고 mysql server에 접속한다.

//connection.end();  mysql 접속을 종료한다. ==> 실행하지 않는다.

app.get('/', (req, res) => {
  res.send('Hello World! -- express')
})

app.get('/login', (req, res) => {
    res.send('this is a login page')
  })

// 클라이언트가 서버 url (127.0.0.1:3000/booklist) 에 접속하면 
// madang.book 테이블에 있는 책 정보를 가져와서 응답을 보내준다.
app.get('/booklist', (req, res) => {
    const sql = 'select bookname, publisher , price from book;';
    //sql 실행하고 그 결과를 뒤에 있는 콜백함수의 매개변수로 넘겨준다.
    connection.query(sql, 
                    function (error, results, fields) {
                        if (error) throw error;
                        else {
                          console.log(results);
                          // for(let i=0; i<results.length; i++){
                          //   console.log(`${i}번째 책의 이름은 ${results[i].bookname}입니다.`); //서버의 콘솔에 결과를 출력한다.
                          //   console.log('publisher is: ', results[i].publisher); 
                          //   console.log('price is: ', results[i].price); 
                          // }
                        }
                        res.send(results);
                    });
 })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})