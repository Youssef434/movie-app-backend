const express = require('express')
const router = express.Router()
const { addMovie, findAllMovies, findMovieById } = require('../controllers/movie.controller')
const { Movie } = require('../models/movie.model')


router.get('/', async (req, res) => {
  res.end(JSON.stringify(await findAllMovies()))
})

router.get('/:id', async (req, res) => {
  res.end(JSON.stringify(await findMovieById(+req.params.id)))
})

router.post('/add', (req, res) => {
  addMovie(new Movie(req.body))
  res.end('movies successfully added')
})

module.exports = router