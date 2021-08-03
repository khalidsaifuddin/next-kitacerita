import React, { Component } from 'react'
import { Message } from 'semantic-ui-react'

export default class CardMessage extends Component {

  state = {
    pesan: (this.props.pesan ? this.props.pesan : ''),
    judul: (this.props.judul ? this.props.judul : '')
  }

  render(){

    return (
      <Message positive>
        <Message.Header>{this.state.judul}</Message.Header>
        <p>
          {this.state.pesan}
        </p>
        {this.props.children}
      </Message>
    )
  }
}