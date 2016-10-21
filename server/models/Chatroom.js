const mongoose = require('mongoose')

const chatroomSchema = new mongoose.Schema({
  roomName: String,
  description: String,
  messages: [{body: String, timestamp: {type: Date, default: Date.now}, author: String}],
  participants: Number
})

const Chatroom = mongoose.model('Chatroom', chatroomSchema)

module.exports = Chatroom
