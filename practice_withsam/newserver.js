const express = require('express') // 노드js에서 웹프레임워크를 사용하기 위해 express 라이브러리를 가져온다.
const app = express()  // 웹서버 instance를 생성한다.
const port = 3000      // 포트번호를 port 변수에 저장한다.

// 클라이언트가 서버 url (127.0.0.1:3000/) 에 get 메소드로 접속하면 hello world 라는 응답을 보내준다.
app.get('/', (req, res)=> { 
  res.send('Hello World!')
})

// 클라이언트가 서버 url (127.0.0.1:3000/login) 에 접속하면 login page 라는 응답을 보내준다.
app.get('/login', (req, res)=> {  
    res.send('login page')
})

// 클라이언트가 서버 url (127.0.0.1:3000/booklist) 에 접속하면 booklist 라는 응답을 보내준다.
app.get('/booklist', function(req, res){
    res.send('booklist')
})

app.listen(port, function() { // line2 에서 생성한 웹서버 instance를 실행시키고 클라이언트의 요청을 기다린다.
  console.log(`Example app listening on port ${port}`)
})
