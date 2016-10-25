const express = require('express')
const router = express.Router()

const Chatroom = require('../models/Chatroom')

// router.route('/tester')
//   .get((req, res) => {
//     req.io.emit('action', {
//       type: 'RECEIVE_MESSAGE',
//       payload: 'data'
//     })
//   })

router.route('/messages/:id')
  .get((req, res) => {
    Chatroom.findById(req.params.id)
      .then(chatroom => {
        req.io.emit('action', {
          type: 'RECEIVE_CHATROOM',
          payload: chatroom
        })
      })
      .catch(err => res.status(400).send(err))
  })
  .put((req, res) => {
    Chatroom.findById(req.params.id)
      .then(chatroom => {
        chatroom.messages.push(req.body)
        return chatroom.save()
      })
      .then(updatedChat => {
        req.io.emit('action', {
          type: 'RECEIVE_CHATROOM',
          payload: updatedChat
        })
      })
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
      .then(chatrooms => {
        req.io.emit('action', {
          type: 'RECEIVE_ALL',
          payload: chatrooms
        })
      })
      .catch(err => res.status(400).send(err))
  })
  .post((req, res) => {
    Chatroom.create(req.body)
      .then(chatrooms => {
        req.io.emit('action', {
          type: 'RECEIVE_ALL',
          payload: chatrooms
        })
      })
      .catch(err => res.status(400).send(err))
  })

module.exports = router
