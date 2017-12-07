const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const Post = require('./models/Post')

const port = 3001
app.set('trust proxy', '127.0.0.1')

mongoose.connect('mongodb://localhost/INSTAGRAM_DB')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(require('./config/error-handler'))

app.get('/api/posts', (req, res) => {
  Post.find((err, posts) => {
    if (err) {
      res.json({ error: err })
    } else {
      res.json({ msg: 'Successfully got your insta posts!', data: posts })
    }
  })
})

const server = app.listen(port, () => console.log(`🔥🔥 Running on port: ${port} 🔥🔥`))

module.exports = server
