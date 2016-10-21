import React, { Component } from 'react'
import moment from 'moment'

import ChatroomStore from '../stores/ChatroomStore'
import ChatroomActions from '../actions/ChatroomActions'

import MessageList from './MessageList'

export default class Chatroom extends Component {
  constructor () {
    super()

    this.state = {
      chatroom: ChatroomStore.getChatroom()
    }

    this._onChange = this._onChange.bind(this)
  }

  componentWillMount () {
    ChatroomStore.on('CHANGE', this._onChange)
    ChatroomActions.getChatroom(this.props.params.id)
  }

  componentWillUnmount () {
    ChatroomStore.removeListener('CHANGE', this._onChange)
  }

  _onChange () {
    this.setState({
      chatroom: ChatroomStore.getChatroom()
    })
  }

  _newMessage (e) {
    e.preventDefault()

    let newMessage = {
      body: e.target.newMessage.value.toString(),
      author: e.target.author.value.toString()
    }

    ChatroomActions.addMessage(this.props.params.id, newMessage)
  }

  render () {
    console.log('this.state.chatroom: ', this.state.chatroom.messages)

    return (
      <div>
        <MessageList {...this.state.chatroom} />
        <form onSubmit={(e) => this._newMessage(e)}>
          <input id="newMessage" type="text" placeholder="message" />
          <input id="author" type="text" placeholder="author" />
          <button type="submit">Send Message</button>
        </form>
      </div>
    )
  }
}
