const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const moviesRouter = require('./routes/movie.route')
const usersRouter = require('./routes/user.route')
const commentsRouter = require('./routes/comment.route')
require('./db/database')

app.use(express.json())
  .use('/movies', moviesRouter)
  .use('/users', usersRouter)
  .use('/comments/', commentsRouter)
  .listen(PORT, () => console.log('App running on port ' + PORT))














// app.post('/', (req, res) => {
//   console.log('body:', req.body)
//   res.end('Body accepted.')
// })

// app.get('/', (req, res) => {
//   console.log('query:', req.query)
//   res.end('Request successfully recieved.')
// })

// app.get('/:name/:age', (req, res) => {
//   console.log('params', req.params)
//   res.end('Request successfully recieved.')
// })

// const http = require('http')
// const url = require('url')
// const PORT = process.env.PORT || 3000

// const server = http.createServer((req, res) => {
//   if (req.method === 'POST') {
//     let body = ""
    
//     req.on('data', (content) => {
//       body += content
//     })

//     req.on('end', () => {
//       console.log(`body ${body}`)
//       res.end('Accepted body')
//     })

//     return
//   }

//   const parsedURL = url.parse(req.url, true)
//   const path = parsedURL.pathname
//   const queryString = parsedURL.query
//   console.log(`request from url ${path} with these query params`, queryString)
//   res.end()
// })

// server.listen(PORT, () => console.log(`Server runing on port ${PORT}`))