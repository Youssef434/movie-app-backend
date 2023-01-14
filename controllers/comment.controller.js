const { Comment } = require('../models/comment.model')

module.exports = {
  findMovieComments(movieId) {
    return Comment.find({ movie: movieId })
  },
  addCommentToMovie(comment) {
    comment.save()
  }
}