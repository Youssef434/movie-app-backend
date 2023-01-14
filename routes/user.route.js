const express = require('express')
const router = express.Router()
const { User } = require('../models/user.model')
const { signIn, signUp, findUserById, addToFavoris } = require('../controllers/user.controller')

router.get('/:id', async (req, res) => {
  res.end(JSON.stringify(await findUserById(req.params.id)))
})

router.get('/favoris/:id', async (req, res) => {
  res.end(JSON.stringify((await findUserById(req.params.id)).favoriteMovies))
})

router.post('/favoris/:id', async (req, res) => {
  addToFavoris(req.body.movieId, req.params.id)
  res.end()
})

router.post('/sign-in', async (req, res) => {
  res.status(await signIn(req.body) !== null ? 200 : 401).end()
})

router.post('/sign-up', (req, res) => {
  signUp(new User(req.body))
  res.end()
})

module.exports = router
