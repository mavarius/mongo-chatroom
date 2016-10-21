import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _chatrooms = []

class ChatroomStore extends EventEmitter {
  constructor () {
    super()

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'RECEIVE_ALL':
          _chatrooms = action.payload
          this.emit('CHANGE')
          break
      }
    })
  }

  getAll () {
    return _chatrooms
  }

}

export default new ChatroomStore()
