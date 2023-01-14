const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/test')

mongoose.connection
    .on('connected', () => console.log('connection successfully established.'))
    .on('disconnected', () => console.log('successfully disconnected from the database.'))
    .on('error', () => console.error.bind(console, 'connection error: '))