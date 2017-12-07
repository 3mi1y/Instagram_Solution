// GOAL is a JSON object that looks like so:

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
  title: { type: String, required: true },
  img: { type: String, required: true },
  caption: { type: String, required: true },
  userName: { type: String, required: true }
})

// const someMovie = new Movie({title: 'Jaws', year: 19})
module.exports = mongoose.model('Post', PostSchema)
