import React from 'react'
import moment from 'moment'
import uuid from 'uuid'

const MessageList = ({ messages }) => (
  <div>
    {messages
      ? messages.map(message => {
        return (
          <div className="row" key={message._id}>
            <p>{message.body} - <em>{message.author}</em></p>
            <p>{moment(message.timestamp).format('MMM DD YYYY | h:mm:ss a')}</p>
          </div>
        )
      }) : null}
  </div>
)

export default MessageList
