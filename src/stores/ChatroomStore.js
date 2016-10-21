import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _chatrooms = []

let _currentRoom = {}

class ChatroomStore extends EventEmitter {
  constructor () {
    super()

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'RECEIVE_ALL':
          _chatrooms = action.payload
          this.emit('CHANGE')
          break
        case 'RECEIVE_CHATROOM':
          _currentRoom = action.payload
          this.emit('CHANGE')
          break
      }
    })
  }

  getAll () {
    return _chatrooms
  }

  getChatroom () {
    return _currentRoom
  }

}

export default new ChatroomStore()
