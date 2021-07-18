import React, { Component } from 'react'
import { Card, Icon, Image, Grid } from 'semantic-ui-react'

export default class CardKategori extends Component {

  style = {
    margin: (this.props.margin ? this.props.margin : '8px'), 
    maxWidth: (this.props.maxWidth ? this.props.maxWidth : '180px'), 
    minWidth: (this.props.minWidth ? this.props.minWidth : '180px'),
    background: (this.props.gradient ? this.props.gradient : '#eeeeee')
  }

  render(){
    return (
      <Card fluid style={this.style}>
        <Card.Content style={{padding:'8px', flexGrow:'inherit'}}>
          <Card.Header style={{fontSize:'14px', color: (this.props.gradient ? '#ffffff' : '#434343')}}>Nama Kategori</Card.Header>
          <Card.Meta>
            <span className='date' style={{fontSize:'12px', color: (this.props.gradient ? '#ffffff' : '#434343')}}>10 Cerita</span>
          </Card.Meta>
        </Card.Content>
      </Card>
    )
  }
}
