import React, { Component } from 'react'
import Head from 'next/head'
import { Button, ButtonContent, Card, Grid, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Layout from '../../components/Layout'
import Navbar from '../../components/Navbar'
import { withRouter } from 'next/router'
import * as CeritaActions from '../../../store/actions/cerita.actions'
import * as AppActions from '../../../store/actions/app.actions'
import config from '../../../config'
import CardPenulis from '../../components/cardPenulis'
import StarRating from '../../components/starRating'
import FormatTanggal from '../../components/formatTanggal'
// import moment from 'moment'


class PreviewCerita extends Component {
  state = {
    loading: true,
    params: {
      foo: 'bar',
      dengan_bab_cerita: 'Y'
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
              <Button fluid color={'violet'} style={{marginTop:'8px'}}>
                <Icon name="arrow right" />&nbsp;
                Baca Sekarang
              </Button>
              <Button fluid basic color="blue" style={{marginTop:'8px'}}>
                Simpan di Perpustakaan
              </Button>
            </Grid.Column>
            <Grid.Column computer={11} tablet={11} mobile={16}>
              <CardPenulis penulis={penulis} />
              <div style={{fontSize:'14px', lineHeight:'24px'}}>
                <h4 style={{marginBottom:'8px'}}>Sinopsis</h4>
                {cerita.keterangan}
              </div>
              <div style={{fontSize:'14px', lineHeight:'24px', marginTop:'16px'}}>
                <h4 style={{marginBottom:'8px'}}>Jumlah Bab</h4>
                {cerita.bab_cerita ? cerita.bab_cerita.length : '0'} dari {cerita.rencana_bab} bab
              </div>
              <div style={{fontSize:'14px', lineHeight:'24px', marginTop:'16px'}}>
                <h4 style={{marginBottom:'8px'}}>Status</h4>
                {cerita.ongoing === 1 ? "Ongoing" : "Completed"}
              </div>
              <div style={{fontSize:'14px', lineHeight:'24px', marginTop:'16px'}}>
                <h4 style={{marginBottom:'8px'}}>Tanggal Rilis</h4>
                {cerita.create_date && <FormatTanggal tanggal={cerita.create_date.replace("T"," ")} />}
              </div>
              <div style={{fontSize:'14px', lineHeight:'24px', marginTop:'16px'}}>
                <Grid>
                  <Grid.Column width="8">
                    <StarRating />
                  </Grid.Column>
                  <Grid.Column width="8">
                    <Icon name="comment" />
                    100 Komentar
                  </Grid.Column>
                </Grid>
              </div>
            </Grid.Column>
          </Grid>
        </Layout>
      </div>
    )
  }
}

export default withRouter(PreviewCerita)