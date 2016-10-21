const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: String,
  messageHistory: [{message: String, timestamp: Date}]
})
