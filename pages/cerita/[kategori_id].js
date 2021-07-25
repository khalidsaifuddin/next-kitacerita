import React, { Component } from 'react'
import Head from 'next/head'
import { Grid, Button, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import { withRouter } from 'next/router'
import * as KategoriActions from '../../store/actions/kategori.actions'
import * as CeritaActions from '../../store/actions/cerita.actions'
import config from '../../config'
import CardBuku from '../components/cardBuku'

class Cerita extends Component {
  state = {
    loading: true,
    params: {
      dengan_bab_cerita: 'Y'
    },
    kategori: {},
    cerita: {
      rows: []
    }
  }

  loadInitialData = () => {
    this.setState({
      params: {
        ...this.state.params,
        kategori_id: this.props.router.query.kategori_id
      }
    },()=>{
      KategoriActions.getKategori(this.state.params, config.api_base).then((result)=>{
        this.setState({
          loading: false,
          kategori: result.data.result > 0 ? result.data.rows[0] : {}
        })
      })

      CeritaActions.getCerita({...this.state.params, kategori_id: (this.props.router.query.kategori_id !== 'semua' ? this.props.router.query.kategori_id : null)}, config.api_base).then((result)=>{
        this.setState({
          loading: false,
          cerita: result.data
        })
      })
    })
  }

  componentDidMount = () => {
    this.props.router.events.on('routeChangeComplete',()=>{
      //do something after
      this.loadInitialData()
    })
    
  }

  render() {

    return (
      <div className="container">
        <Head>
          <title>KitaCerita - Cerita ({this.state.kategori.nama ? this.state.kategori.nama : 'Semua'})</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <Layout>
          <Grid>
            <Grid.Column computer={10} tablet={10} mobile={16} style={{padding:'4px'}}>
              <h2>{this.state.kategori.nama ? <span>Cerita {this.state.kategori.nama}</span> : 'Semua Cerita'}</h2>
            </Grid.Column>
            <Grid.Column computer={6} tablet={6} mobile={16} style={{textAlign:'right', padding:'4px'}}>
              <Button>
                <Icon name='filter' />
                Filter
              </Button>
            </Grid.Column>
            {this.state.cerita.rows.map((option)=>{
              return (
                <Grid.Column computer={4} tablet={4} mobile={8} style={{padding:'8px'}}>
                  <CardBuku fluid record={option} />
                </Grid.Column>
              )
            })}
          </Grid>
        </Layout>
      </div>
    )
  }
}

export default withRouter(Cerita)