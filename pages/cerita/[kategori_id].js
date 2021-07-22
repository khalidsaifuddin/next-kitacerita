import React, { Component } from 'react'
import Head from 'next/head'
import { Grid } from 'semantic-ui-react'
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
    params: {},
    kategori: {},
    cerita: {
      rows: []
    }
  }

  componentDidMount = () => {
    this.props.router.events.on('routeChangeComplete',()=>{
      //do something after
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

        // console.log(this.state.params)
      })
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
          <h2>{this.state.kategori.nama ? <span>Cerita {this.state.kategori.nama}</span> : 'Semua Cerita'}</h2>
          {/* <div style={{display:'inline-flex', flexWrap:'wrap'}}> */}
          <Grid>
            {this.state.cerita.rows.map((option)=>{
              return (
                <Grid.Column computer={4} tablet={4} mobile={8} style={{padding:'8px'}}>
                  <CardBuku fluid record={option} />
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

export default withRouter(Cerita)