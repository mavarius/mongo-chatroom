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

  render () {
    return (
      <div>
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
