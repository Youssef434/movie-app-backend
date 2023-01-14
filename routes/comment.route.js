const express = require('express')
const router = express.Router()
const { Comment } = require('../models/comment.model')
const { findMovieComments, addCommentToMovie } = require('../controllers/comment.controller')

router.get('/:movieId', async (req, res) => {
  res.end(JSON.stringify(await findMovieComments(+req.params.movieId)))
})

router.post('/', (req, res) => {
  addCommentToMovie(new Comment(req.body))
  res.end()
})

module.exports = router

