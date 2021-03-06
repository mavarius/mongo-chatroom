import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import './socket-init'

import Layout from './components/Layout'
import HomePage from './components/HomePage'
import Chatroom from './components/Chatroom'

render(
  <Router history={browserHistory}>

    <Route path="/" component={Layout}>
      <IndexRoute component={HomePage} />
      <Route path="/:id" component={Chatroom} />
    </Route>

  </Router>,
  document.getElementById('root')
)
