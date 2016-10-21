import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  receiveAll (data) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_ALL',
      payload: data
    })
  },

  receiveChatroom (data) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_CHATROOM',
      payload: data
    })
  }
}

export default ServerActions
