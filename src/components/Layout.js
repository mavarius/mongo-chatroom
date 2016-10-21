import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Layout extends Component {
  render () {
    // let randomBackground = {
    //   backgroundImage: `url(../images/background.jpeg)`
    // }

    return (
      <div>
        {/* <div className="backgroundImage" style={randomBackground}></div> */}
        <div className="container">
          <div className="row">
            <Link to="/" className="appTitle" onlyActiveOnIndex><h1>Mongo Chatroom</h1></Link>
          </div>
          <div className="row">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
