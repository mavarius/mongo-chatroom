const mongoose = require('mongoose')

const lobbySchema = new mongoose.Schema({
  rooms: [{name: String, description: String}],
  totalParticipants: Number
})
