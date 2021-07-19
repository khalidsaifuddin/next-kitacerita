import React, { Component } from 'react'
import Head from 'next/head'
import { Card, Grid, Button } from 'semantic-ui-react'
import '../styles/global.module.css'
import 'semantic-ui-css/semantic.min.css'
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import { withRouter } from 'next/router'
import CardKategori from './components/cardKategori'
import * as KategoriActions from '../store/actions/kategori.actions'
import config from '../config'
import getParameterByName from '../functions/param_function'

class Kategori extends Component {
  state = {
    params: {
      rumpun_kategori_id: null
    },
    rumpun_kategori: {
      rows: []
    },
    kategori: {
      rows: []
    },
    total_cerita: 0,
    rumpun_kategori_id_aktif: (getParameterByName('rumpun', this.props.router.asPath) ? getParameterByName('rumpun', this.props.router.asPath) : null)
  }

  componentDidMount = () => {

    // console.log(window.location.replace('/kategori?rumpun='))
    // console.log(window.history.pushState('/kategori?rumpun='))

    // console.log(getParameterByName('rumpun', this.props.router.asPath))

    KategoriActions.getRumpunKategori(this.state.params, config.api_base).then((result)=>{
      this.setState({
        rumpun_kategori: result.data
      },()=>{
        console.log(this.state.rumpun_kategori)
      })
    })
    
    KategoriActions.getKategori({...this.state.params, rumpun_kategori_id: this.state.rumpun_kategori_id_aktif}, config.api_base).then((result)=>{
      this.setState({
        kategori: result.data
      },()=>{
        console.log(this.state.kategori)

        let total_cerita = 0

        this.state.kategori.rows.map((option)=>{
          total_cerita = total_cerita+parseInt(option.jumlah_cerita > 0 ? option.jumlah_cerita : 0)
        })

        this.setState({
          total_cerita: total_cerita
        })
      })
    })
  }

  filterRumpun = (rumpun_kategori_id) => {

    if(rumpun_kategori_id !== 'semua'){
      this.setState({
        rumpun_kategori_id_aktif: rumpun_kategori_id
      },()=>{
        window.history.pushState('','','/kategori?rumpun='+rumpun_kategori_id)

        KategoriActions.getKategori({...this.state.params, rumpun_kategori_id: this.state.rumpun_kategori_id_aktif}, config.api_base).then((result)=>{
          this.setState({
            kategori: result.data
          },()=>{
            console.log(this.state.kategori)
          })
        })
      })
    }else{
      this.setState({
        rumpun_kategori_id_aktif: null
      },()=>{
        window.history.pushState('','','/kategori')

        KategoriActions.getKategori({...this.state.params, rumpun_kategori_id: this.state.rumpun_kategori_id_aktif}, config.api_base).then((result)=>{
          this.setState({
            kategori: result.data
          },()=>{
            console.log(this.state.kategori)
          })
        })
      })
    }
  }

  render() {
    return (
      <div className="container">
        <Head>
          <title>KitaCerita - Kategori</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <Layout>
          <h2>Kategori</h2>
          {/* <div className="etalaseKategori"> */}
          <Card fluid>
            <Card.Content>
              <Button basic={this.state.rumpun_kategori_id_aktif === null ? false : true} onClick={()=>this.filterRumpun('semua')} primary={this.state.rumpun_kategori_id_aktif === null ? true : false}>
                Semua
              </Button>
              {this.state.rumpun_kategori.rows.map((option)=>{
                return (
                  <Button basic={option.rumpun_kategori_id === this.state.rumpun_kategori_id_aktif ? false : true} primary={option.rumpun_kategori_id === this.state.rumpun_kategori_id_aktif ? true : false} key={option.rumpun_kategori_id} onClick={()=>this.filterRumpun(option.rumpun_kategori_id)}>
                    {option.nama}
                  </Button>
                )
              })}
            </Card.Content>
          </Card>

          <Grid style={{padding:'8px'}}>
            <Grid.Column mobile={16} tablet={8} computer={4} style={{padding:'8px'}}>
              <CardKategori minWidth={'100%'} maxWidth={'100%'} margin={'0px'} record={{kategori_id:'semua', nama:'Semua', jumlah_cerita: this.state.total_cerita, rumpun_kategori: 'Semua'}} />
            </Grid.Column>
            {this.state.kategori.rows.map((option)=>{
              return (
                <Grid.Column mobile={16} tablet={8} computer={4} style={{padding:'8px'}}>
                  <CardKategori minWidth={'100%'} maxWidth={'100%'} margin={'0px'} record={option} />
                </Grid.Column>
              )
            })}
          </Grid>
          {/* </div> */}
        </Layout>
      </div>
    )
  }
}

export default withRouter(Kategori)

// export default function Beranda() {
//   return (
//     <Layout>
//       isinya beranda
//     </Layout>
//   )
// }