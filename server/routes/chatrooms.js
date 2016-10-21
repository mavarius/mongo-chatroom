const express = require('express')
const router = express.Router()

const Chatroom = require('../models/Chatroom')

router.route('/messages/:id')
  .get((req, res) => {
    Chatroom.findById(req.params.id)
      .then(chatroom => res.send(chatroom))
      .catch(err => res.status(400).send(err))
  })
  .put((req, res) => {
    Chatroom.findById(req.params.id)
      .then(chatroom => {
        chatroom.messages.push(req.body)
        return chatroom.save()
      })
      .then(updatedChat => res.send(updatedChat))
      .catch(err => res.status(400).send(err))
  })

router.route('/rooms/:id')
  .put((req, res) => {
    Chatroom.findByIdAndUpdate(req.params.id, req.body)
  })

router.route('/rooms')
  .get((req, res) => {
    Chatroom.find({})
      .then(chatrooms => {
        console.log('chatrooms: ', chatrooms)
        let rooms = chatrooms.roomName
        res.send(rooms)
      })
      .catch(err => res.status(400).send(err))
  })

router.route('/')
  .get((req, res) => {
    Chatroom.find({})
      .then(chatrooms => res.send(chatrooms))
      .catch(err => res.status(400).send(err))
  })
  .post((req, res) => {
    Chatroom.create(req.body)
      .then(chatrooms => res.send(chatrooms))
      .catch(err => res.status(400).send(err))
  })

module.exports = router
