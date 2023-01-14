const { User } = require('../models/user.model')

module.exports = {
  signIn({ email, password }) {
    return User.findOne({ email, password })
  },
  signUp(user) {
    user.save()
  },
  findUserById(id) {
    return User.findOne({ id })
  },
  async addToFavoris(favoris, id) {
    const user = await User.findOne({ id })
    user.favoriteMovies.push(favoris)
    user.save()
  }
} 