const express = require('express')
const app = express()
const port = 3300


app.get('/', (req, res)=> { 
  res.send('Hello World! --- get method')
})

app.post('/', (req, res)=> { 
  res.send('Hello World! --- post method')
})


app.get('/login', (req, res)=> {  
    res.send('login page')
})


app.get('/booklist', function(req, res){
    res.send('booklist')
})

app.listen(port, function() {
  console.log(`Example app listening on port ${port}`)
})
