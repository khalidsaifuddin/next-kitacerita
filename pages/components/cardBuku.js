import React, { Component } from 'react'
import { Card, Icon, Image, Grid } from 'semantic-ui-react'

export default class CardBuku extends Component {

  // console.log(props.data)
  render(){
    return (
      <Card fluid style={{maxWidth:'200px', margin:'8px', minWidth:'200px'}}>
        {/* <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={true} /> */}
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' wrapped ui={true} />
        <Card.Content style={{padding:'8px', flexGrow:'inherit'}}>
          <Card.Header style={{fontSize:'14px'}}>Judul Ceritanya</Card.Header>
          <Card.Meta>
            <span className='date' style={{fontSize:'12px'}}>Nama Pengarangnya</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra style={{padding:'16px', flexGrow:'inherit'}}>
          <Grid>
            <Grid.Column width={5} style={{padding:'8px'}}>
              <a>
                <Icon name='eye' />
                22k
              </a>
            </Grid.Column>
            <Grid.Column width={5} style={{textAlign:'center', padding:'8px'}}>
              <a>
                <Icon name='list' />
                10
              </a>
            </Grid.Column>
            <Grid.Column width={5} style={{textAlign:'right', padding:'8px'}}>
              <a>
                <Icon name='star' />
                5
              </a>
            </Grid.Column>
          </Grid>
        </Card.Content>
      </Card>
    )
  }
}

// export default CardBuku