const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  vote_average: { type: Number, required: true },
  title: { type: String, required: true },
  poster_path: { type: String, required: true },
  original_title: { type: String, required: true },
  overview: { type: String, required: true },
  release_date: { type: String, required: true },
})

module.exports = {
  Movie: mongoose.model('Movie', movieSchema)
}