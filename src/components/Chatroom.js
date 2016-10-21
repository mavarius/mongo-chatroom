import React, { Component } from 'react'
import moment from 'moment'

import ChatroomStore from '../stores/ChatroomStore'
import ChatroomActions from '../actions/ChatroomActions'

import MessageList from './MessageList'

export default class Chatroom extends Component {
  constructor () {
    super()

    this.state = {
      chatrooms: ChatroomStore.getAll()
    }

    this._onChange = this._onChange.bind(this)
  }

  componentWillMount () {
    ChatroomStore.on('CHANGE', this._onChange)
    ChatroomActions.getAll()
  }

  componentWillUnmount () {
    ChatroomStore.removeListener('CHANGE', this._onChange)
  }

  _onChange () {
    this.setState({
      chatrooms: ChatroomStore.getAll()
    })
  }

  render () {
    console.log('this.state.chatrooms: ', this.state.chatrooms)

    return (
      <div>
        <MessageList {...this.state} />
        <form onSubmit="">
          <input type="text" />
          <button type="submit">Send Message</button>
        </form>
      </div>
    )
  }
}
