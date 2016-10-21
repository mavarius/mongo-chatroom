import React, { Component } from 'react'

import ChatroomStore from '../stores/ChatroomStore'
import ChatroomActions from '../actions/ChatroomActions'

import Chatroom from './Chatroom'
import ChatroomList from './ChatroomList'

export default class HomePage extends Component {
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

  _addNewChatroom (e) {
    e.preventDefault()

    let newRoom = {
      roomName: e.target.roomName.value.toString(),
      description: e.target.description.value.toString()
    }

    ChatroomActions.addChatroom(newRoom)
    ChatroomActions.getAll()
  }

  render () {
    return (
      <div>
        <div className="row">
          <form onSubmit={(e) => this._addNewChatroom(e)}>
            <input id="roomName" type="text" placeholder="room name" />
            <input id="description" type="text" placeholder="description" />
            <button type="submit">Add New Chatroom</button>
          </form>
        </div>

        <div className="row">
          <ChatroomList {...this.state} />
        </div>

        <div className="row">
          {this.props.children}
        </div>
      </div>
    )
  }
}
