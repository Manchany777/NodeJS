var mysql = require('mysql');  // nodejs에서 mysql db에 접속하기 위해 필요한 모듈 mysql을 가져온다.
var connection = mysql.createConnection({  // mysql db에 접속하기 위한 접속정보를 저장한다.
  host     : 'localhost',    // 호스트 주소
  port     : 3306,           // mysqlserver 의 port
  user     : 'root',         // mysql user
  password : '1231',         // mysql password
  database : 'madang'        // mysql 데이터베이스
});
connection.connect();  // 데이터베이스 접속정보를 가지고 mysql server에 접속한다.


// orders 테이블에서 orderid가 1인 주문자료를 가져와서
// 주문일자만 콘솔에 출력하시오.

const sql3 = 'SELECT orderdate from orders;';
// sql3 문을 실행시켜주는 함수가 query( sql3 , 콜백함수 )
connection.query( sql3,                   // sql3의 실행결과를 콜백함수의 매개변수 즉 error, results 로 넘겨준다.
            function (error, results, fields) { 
                if (error) throw error;   // sql 실행하고 에러가 있으면 에러를 출력하고
                else{                     // 에러가 없으면 results 배열에 담겨있는 객체정보를 확인해서 콘솔에 출력한다.
                    console.log(results);
                    console.log(typeof(results));
                    console.log(results[results.length-1]);
                    console.log(typeof(results[0]));
                    console.log('The solution is: ', results[0].orderdate);
                }   
            });

// 추가 설명 - sql injection 이란 ?
// sql injection 을 막으려면 ?


// select sql 문을 모두 사용하였으면 workbench 를 종료하듯이
// db 접속을 종료하고 프로그램을 종료한다.
connection.end();