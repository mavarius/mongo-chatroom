import API from '../API'
// import AppDispatcher from '../AppDispatcher'

const ChatroomActions = {
  getAll () {
    API.getAll()
  },

  getChatroom (id) {
    API.getChatroom(id)
  },

  addChatroom (newRoom) {
    API.addChatroom(newRoom)
  },

  addMessage (id, newMessage) {
    API.addMessage(id, newMessage)
  }
}

export default ChatroomActions
