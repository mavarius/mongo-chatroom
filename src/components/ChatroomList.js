import React from 'react'
import { browserHistory } from 'react-router'

const ChatroomList = ({ chatrooms }) => (
  <div>
    {chatrooms.map((chatroom, i) => {
      return (
        <div key={chatroom._id} className="col-xs-12 col-sm-6">
          <div className="roomListing" onClick={() => browserHistory.push(`/${chatroom._id}`)}>
            <div className="postCount">{chatroom.messages.length} posts</div>
            <h4 className="roomName">{chatroom.roomName}</h4>
            <h6 className="roomDescription">{chatroom.description}</h6>
          </div>
        </div>
      )
    })}
  </div>
)

export default ChatroomList
