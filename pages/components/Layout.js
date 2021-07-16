import React, { Component } from 'react'
import { Grid, Menu, Icon, Label } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
// import { useRouter } from 'next/router'


export default class Layout extends Component {
  state = {
    activeItem: 'home'
  }

  componentDidMount = () => {
    console.log(window.location.href.split('/'))

    let urls = window.location.href.split('/')

    if(urls.length > 3){
      if(urls[3] !== ""){
        this.setState({
          activeItem: urls[3]
        })
      }
    }
  }

  handleClick = (tipe) => {
    this.setState({
      activeItem: tipe
    },()=>{
      if(tipe !== 'home'){
        window.location.href="/"+tipe
      }else{
        window.location.href="/"
      }
    })
  }

  render() {
    const {activeItem} = this.state
    return (
      <div className="container">
        <Grid>
          <Grid.Column computer={2} only='computer'>
          </Grid.Column>
          <Grid.Column computer={12} mobile={16} tablet={16}>
            
            <Grid style={{marginTop:'64px'}}>
              <Grid.Column computer={4} only='computer'>
                <Menu secondary pointing vertical style={{width:'100%'}}>
                  <Menu.Item
                    name="home"
                    onClick={()=>this.handleClick('home')}
                    active={activeItem === 'home'}
                  >
                    <Label style={{display:'none'}}>&nbsp;</Label>
                    <Icon name='home' style={{fontSize:'16px'}} /> Beranda
                  </Menu.Item>
                  <Menu.Item
                    name='Kategori'
                    onClick={()=>this.handleClick('kategori')}
                    active={activeItem === 'kategori'}
                  >
                    <Label style={{display:'none'}}>&nbsp;</Label>
                    <Icon name='grid layout' style={{fontSize:'16px'}} /> Kategori
                  </Menu.Item>
                  <Menu.Item
                    name='Perpustakaan Anda'
                    onClick={()=>this.handleClick('perpustakaan')}
                    active={activeItem === 'perpustakaan'}
                  >
                    <Label style={{display:'none'}}>&nbsp;</Label>
                    <Icon name='favorite' style={{fontSize:'16px'}} /> Perpustakaan Anda
                  </Menu.Item>
                </Menu>
              </Grid.Column>
              <Grid.Column computer={12} mobile={16} tablet={16}>
                <div style={{margin:'8px'}}>
                  {this.props.children}
                </div>
              </Grid.Column>
            </Grid>

          </Grid.Column>
          <Grid.Column computer={2} only='computer'>
          </Grid.Column>
        </Grid>
      </div>
    )
  }

}

// const initialState = {
//   loading: false,
//   activeItem: 'home'
// }

// // // function handleClick(tipe){
// // //   alert(tipe)
// // // }

// function layoutReducer(state, action) {
//   switch (action.tipe) {
//     default:
//       throw new Error()
//   }
// }

// export default function Layout({ children }) {
//   const [state, dispatch] = React.useReducer(layoutReducer, initialState)
//   const { loading, activeItem } = state

//   const handleClick = React.useCallback((tipe) => {
//     dispatch({ activeItem: tipe })

//   }, [])

//   return (
//     <div className="container">
//       <Grid>
//         <Grid.Column computer={2} only='computer'>
//         </Grid.Column>
//         <Grid.Column computer={12} mobile={16} tablet={16}>
          
//           <Grid>
//             <Grid.Column computer={4} only='computer'>
//               <Menu pointing secondary vertical>
//                 <Menu.Item
//                   name='Beranda'
//                   onClick={()=>handleClick('home')}
//                   active={activeItem === 'home'}
//                 />
//                 <Menu.Item
//                   name='Kategori'
//                   onClick={()=>handleClick('kategori')}
//                   active={activeItem === 'kategori'}
//                 />
//                 <Menu.Item
//                   name='Perpustakaan Anda'
//                   onClick={()=>handleClick('perpustakaan')}
//                   active={activeItem === 'perpustakaan'}
//                 />
//               </Menu>
//             </Grid.Column>
//             <Grid.Column computer={12} mobile={16} tablet={16}>
//               {children}
//             </Grid.Column>
//           </Grid>


//         </Grid.Column>
//         <Grid.Column computer={2} only='computer'>
//         </Grid.Column>
//       </Grid>
//     </div>
//   )
// }