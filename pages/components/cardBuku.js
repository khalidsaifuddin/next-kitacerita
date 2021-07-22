import React, { Component } from 'react'
import { Card, Icon, Image, Grid } from 'semantic-ui-react'

export default class CardBuku extends Component {

  default_cover = 'https://react.semantic-ui.com/images/wireframe/image.png'

  // console.log(props.data)
  render(){
    return (
      <Card fluid style={{maxWidth:(this.props.fluid ? '100%' : '200px'), margin:(this.props.fluid ? '0px' : '8px'), minWidth:(this.props.fluid ? '100%' : '200px')}}>
        {/* <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={true} /> */}
        {/* <div style={{maxHeight:'50px'}}> */}
        {/* <Image src={this.props.record ? (this.props.record.gambar_cover ? this.props.record.gambar_cover : this.default_cover) : this.default_cover} wrapped ui={true} /> */}
        {/* </div> */}
        <a href={"/cerita/preview/"+(this.props.record ? this.props.record.cerita_id : '')}>
          <div style={{
            height:'192px', 
            border:'0px solid #ccc', 
            backgroundImage:'url('+(this.props.record ? (this.props.record.gambar_cover ? this.props.record.gambar_cover : this.default_cover) : this.default_cover)+')',
            backgroundSize:'cover',
            backgroundPosition:'center',
            backgroundRepeat:'no-repeat'
          }}
          >
            &nbsp;
          </div>
        </a>
        <Card.Content style={{padding:'8px', flexGrow:'inherit'}}>
          <a href={"/cerita/preview/"+(this.props.record ? this.props.record.cerita_id : '')} style={{fontWeight:'bold', color:'#434343'}}>
            <Card.Header style={{fontSize:'14px', minHeight:'36px', maxHeight:'36px', overflow:'hidden', textOverflow:'ellipsis'}}>{this.props.record ? this.props.record.judul :'-'}</Card.Header>
          </a>
          <Card.Meta style={{minHeight:'18px', maxHeight:'18px'}}>
            <span className='date' style={{fontSize:'12px'}}>{this.props.record ? this.props.record.nama_pengguna : ''}</span>
          </Card.Meta>
          <Card.Meta style={{fontSize:'12px'}}>7 Bab</Card.Meta>
        </Card.Content>
        <Card.Content extra style={{padding:'16px', flexGrow:'inherit'}}>
          <Grid>
            <Grid.Column width={8} style={{padding:'8px'}}>
              <a>
                <Icon name='eye' />
                22k
              </a>
            </Grid.Column>
            {/* <Grid.Column width={5} style={{textAlign:'center', padding:'8px'}}>
              <a>
                <Icon name='list' />
                10
              </a>
            </Grid.Column> */}
            <Grid.Column width={8} style={{textAlign:'right', padding:'8px'}}>
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