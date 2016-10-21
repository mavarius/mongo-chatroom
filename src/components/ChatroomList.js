import React from 'react'
import { browserHistory } from 'react-router'

import uuid from 'uuid'

const ChatroomList = ({ chatrooms }) => (
  <div>
    {chatrooms.map(chatroom => {
      return (
        <button key={uuid()} onClick={() => browserHistory.push(`/${chatroom._id}`)}>
          <h4>{chatroom.roomName}</h4>
          <h6>{chatroom.description}</h6>
        </button>
      )
    })}
  </div>
)

export default ChatroomList
