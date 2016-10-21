import { get, post, put } from 'axios'
import ServerActions from './actions/ServerActions'

const API = {
  getAll () {
    get('/api/chatrooms')
      .then(res => {
        ServerActions.receiveAll(res.data)
      })
      .catch(console.error)
  }
}

export default API
