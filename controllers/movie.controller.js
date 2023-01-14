const { Movie } = require('../models/movie.model')

module.exports = {
  addMovie(movie) {
    movie.save()
  },
  findAllMovies() {
    return Movie.find({})
  },
  findMovieById(id) {
    return Movie.findOne({ id })
  },
}
