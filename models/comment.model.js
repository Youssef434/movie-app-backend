const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
  content: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  movie: { type: Number, ref: 'Movie' }
})

module.exports = {
  Comment: mongoose.model('Comment', commentSchema)
}