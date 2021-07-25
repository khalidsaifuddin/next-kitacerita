import React, { Component } from 'react'
import Head from 'next/head'
import { Button, Card, Grid, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Layout from '../../components/Layout'
import Navbar from '../../components/Navbar'
import { withRouter } from 'next/router'
import * as CeritaActions from '../../../store/actions/cerita.actions'
import * as AppActions from '../../../store/actions/app.actions'
import config from '../../../config'
import CardPenulis from '../../components/cardPenulis'

class PreviewCerita extends Component {
  state = {
    loading: true,
    params: {
      foo: 'bar'
    },
    cerita: {},
    penulis: {}
  }

  loadInitialData = () => {
    this.setState({
      params: {
        ...this.state.params,
        cerita_id: this.props.router.query.cerita_id
      }
    },()=>{
      CeritaActions.getCerita({...this.state.params}, config.api_base).then((result)=>{
        this.setState({
          loading: false,
          cerita: result.data.result > 0 ? result.data.rows[0] : {}
        },()=>{
          AppActions.getPengguna({pengguna_id: this.state.cerita.pengguna_id}, config.api_base).then((result)=>{
            this.setState({
              penulis: result.data.result > 0 ? result.data.rows[0] : {}
            })
          })
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

    const {cerita, penulis} = this.state

    return (
      <div className="container">
        <Head>
          <title>KitaCerita - Preview Cerita ({this.state.cerita.judul ? this.state.cerita.judul : 'Semua'})</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <Layout>
          <Grid>
            <Grid.Column computer={16} tablet={16} mobile={16}>
              <h2>{cerita.judul}</h2>
            </Grid.Column>
            <Grid.Column computer={5} tablet={5} mobile={16}>
              <div style={{
                border:'1px solid #ccc',
                backgroundColor:'#434343',
                minHeight:'320px',
                width:'100%',
                backgroundImage: 'url('+cerita.gambar_cover+')',
                backgroundSize:'cover',
                backgroundPosition: 'center',
                borderRadius: '8px'
              }}>
                &nbsp;
              </div>
            </Grid.Column>
            <Grid.Column computer={11} tablet={11} mobile={16}>
              <CardPenulis penulis={penulis} />
            </Grid.Column>
          </Grid>
        </Layout>
      </div>
    )
  }
}

export default withRouter(PreviewCerita)