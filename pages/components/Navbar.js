import React from 'react'
import main from '../_app'
import { Container, Grid, Search, Button, Icon } from 'semantic-ui-react'
import '../../styles/global.module.css'
import 'semantic-ui-css/semantic.min.css'

const initialState = {
  loading: false
}

const devBorder = {
  borderBottom:'1px solid #eee',
  boxShadow: '0px 5px 5px #eee',
}

const styles = {
  borderBottom:'1px solid #eee',
  boxShadow: '0px 5px 5px #eee',
  paddingTop:'8px'
}

function navbarReducer(state, action) {
  switch (action.type) {
    default:
      throw new Error()
  }
}

export default function Navbar({props, main}) {
  const [state, dispatch] = React.useReducer(navbarReducer, initialState)
  const { loading } = state

  const handleKeyPress = (event) => {
    
    if(event.key === 'Enter'){
      // console.log(event)
      window.location.href="/cari/"+event.target.value
    }

  }
  
  return (
    <Container style={{width:'100% !important'}}>
      <Grid style={{...devBorder, ...styles}}>
        <Grid.Column computer={2} only='computer'>
        </Grid.Column>
        <Grid.Column computer={12} mobile={16} tablet={16}>
          
          <Grid style={{marginBottom:'-20px'}}>
            <Grid.Column computer={4} only='computer'>
              <a href="/">
                <img src="/kitacerita-logo.png" style={{height:'32px'}} />
              </a>
            </Grid.Column>
            <Grid.Column computer={8} mobile={16} tablet={16} style={{textAlign:'center'}}>
              <Search
                // fluid
                loading={loading}
                className="navbar-search"
                open={false}
                onKeyPress={handleKeyPress}
              />
            </Grid.Column>
            <Grid.Column computer={4} only='computer' style={{textAlign:'-webkit-right'}}>
              {/* <div style={{height:'36px', width:'36px', borderRadius:'50%', background:'#434343'}}>
                &nbsp;
              </div> */}
              <Button className="bawahCiri" icon labelPosition='right' color='violet' onClick={()=>window.location.href="/login"}>
                Login/Daftar
                <Icon name='right arrow' />
              </Button>
            </Grid.Column>
          </Grid>

        </Grid.Column>
        <Grid.Column computer={2} only='computer'>
        </Grid.Column>
      </Grid>
      <div style={{marginTop:'24px'}}></div>
      <style jsx global>{`
        .navbar-search > .input{
          width:100%;
        }
        .googleLogin{
          width:100%;
          display: inline-flex !important;
          justify-content: center !important;
        }
        .googleLogin > div{
          border-radius: 20px !important;
        }
        .bawahCiri{
          box-shadow: 0px 5px 0px #8d66e2 !important;
        }
      `}</style>
    </Container>
  )
}