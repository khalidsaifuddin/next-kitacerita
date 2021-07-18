import React, { Component } from 'react'
import main from './_app'
import { Grid } from 'semantic-ui-react'
import '../styles/global.module.css'
import 'semantic-ui-css/semantic.min.css'
import Layout from './components/Layout'
import DummyText from './components/dummyText'
import { withRouter } from 'next/router'
import CardBuku from './components/cardBuku'
import CardKategori from './components/cardKategori'
import * as AppActions from '../store/actions/app.actions'

class Beranda extends Component {
  
  state = {
    params: {
      foo: 'bar'
    }
  }

  gradient = [
    // 'linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)',
    // 'linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)',
    // 'linear-gradient(120deg, #f093fb 0%, #f5576c 100%)',
    // 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)',
    // 'linear-gradient(to left, #30cfd0 0%, #330867 100%)',
    // 'radial-gradient(circle 248px at center, #16d9e3 0%, #30c7ec 47%, #46aef7 100%)',
    // 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    '#757575',
    '#757575',
    '#757575',
    '#757575',
    '#757575',
    '#757575',
    '#757575',
    '#757575'
  ]

  componentDidMount = () => {
    // console.log(AppActions.updateWindowDimension)
    // console.log(AppActions)
    // AppActions.login(this.state.params)
  }

  render() {
    return (
      <Layout>
        <h2 style={{marginBottom:'0px'}}>Rekomendasi</h2>
        <div className="etalaseBuku">
          <CardBuku data={{foo:'bar'}} />
          <CardBuku data={{foo:'bar'}} />
          <CardBuku data={{foo:'bar'}} />
          <CardBuku data={{foo:'bar'}} />
          <CardBuku data={{foo:'bar'}} />
          <CardBuku data={{foo:'bar'}} />
          <CardBuku data={{foo:'bar'}} />
        </div>
        <h2 style={{marginBottom:'0px'}}>Kategori</h2>
        <div className="etalaseBuku">
          {this.gradient.map((option)=>{
            return (
              <CardKategori gradient={option} />
            )
          })}
        </div>
        <h2 style={{marginBottom:'0px'}}>Rilis Terbaru</h2>
        <div className="etalaseBuku">
          <CardBuku data={{foo:'bar'}} />
          <CardBuku data={{foo:'bar'}} />
          <CardBuku data={{foo:'bar'}} />
          <CardBuku data={{foo:'bar'}} />
          <CardBuku data={{foo:'bar'}} />
          <CardBuku data={{foo:'bar'}} />
          <CardBuku data={{foo:'bar'}} />
        </div>
        <h2 style={{marginBottom:'0px'}}>Top Rating</h2>
        <div className="etalaseBuku">
          <CardBuku data={{foo:'bar'}} />
          <CardBuku data={{foo:'bar'}} />
          <CardBuku data={{foo:'bar'}} />
          <CardBuku data={{foo:'bar'}} />
          <CardBuku data={{foo:'bar'}} />
          <CardBuku data={{foo:'bar'}} />
          <CardBuku data={{foo:'bar'}} />
        </div>
      </Layout>
    )
  }
}

export default withRouter(Beranda)

// export default function Beranda() {
//   return (
//     <Layout>
//       isinya beranda
//     </Layout>
//   )
// }