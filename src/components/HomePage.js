import React, { Component } from 'react'

// import socket from '../socket-init'

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
      <div className="row">
        <div className="row newRoom">
          <form onSubmit={(e) => this._addNewChatroom(e)}>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <input id="roomName" type="text" placeholder="room name" />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-7">
              <input id="description" type="text" placeholder="description" />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-2">
              <button type="submit" className="darkBtn">add new room</button>
            </div>
          </form>
        </div>

        <div className="row roomList">
          <ChatroomList {...this.state} />
        </div>

        <div className="row">
          {this.props.children}
        </div>
      </div>
    )
  }
}
