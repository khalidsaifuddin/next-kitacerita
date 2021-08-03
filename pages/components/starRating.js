import React, { Component } from 'react'
import { Card, Icon, Grid, Button } from 'semantic-ui-react'

export default class StarRating extends Component {

  render(){

    // const {penulis, withoudHeader, selfProfile, noFollowPanel} = this.props

    return (
      <div style={{display:'inline-flex'}}>
        <div style={{marginRight:'8px'}}>
          3.5
        </div>
        <div>
          <div>
            <Icon name="star" color="grey" />
            <Icon name="star" color="grey" />
            <Icon name="star" color="grey" />
            <Icon name="star" color="grey" />
            <Icon name="star" color="grey" />
          </div>
          <div style={{marginTop:'-24px'}}>
            <Icon name="star" color="yellow" />
            <Icon name="star" color="yellow" />
            <Icon name="star" color="yellow" />
            <Icon name="star half" color="yellow" />
          </div>
        </div>
      </div>
    )
  }
}