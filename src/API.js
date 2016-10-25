import { get, post, put } from 'axios'
// import ServerActions from './actions/ServerActions'

const API = {
  getAll () {
    get('/api/chatrooms')
      .then(res => {
        // console.log('res.data: ', res.data)
        // ServerActions.receiveAll(res.data)
      })
      .catch(console.error)
  },

  getChatroom (id) {
    get(`/api/chatrooms/messages/${id}`)
      .then(res => {
        // ServerActions.receiveChatroom(res.data)
      })
      .catch(console.error)
  },

  addChatroom (newRoom) {
    post('/api/chatrooms/', newRoom)
      .then(res => {
        // console.log('res.data: ', res.data)
        // ServerActions.receiveChatroom(res.data)
      })
      .catch(console.error)
  },

  addMessage (id, newMessage) {
    put(`/api/chatrooms/messages/${id}`, newMessage)
      .then(res => {
        // ServerActions.receiveChatroom(res.data)
      })
      .catch(console.error)
  }
}

export default API
