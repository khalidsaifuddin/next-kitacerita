import React, { Component } from 'react'
import Head from 'next/head'
import { Grid, Placeholder } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import { withRouter } from 'next/router'
import config from '../../config'
import * as AppActions from '../../store/actions/app.actions'

class Profil extends Component {
  state = {
    loading: true,
    params: {},
    pengguna: {}
  }

  cekLogin = () => {
    localforage.getItem('sudah_login', (err, value)=>{
      if(value === 1){
        //sudah login
        this.setState({
          sudah_login: 1
        },()=>{
          localforage.getItem('pengguna', (err, value)=>{
            // console.log(value)
            this.setState({
              pengguna: value
            },()=>{
              
            })
          })
        })
      }else{
        //belum login
      }
    })
  }

  componentDidMount = () => {
    // const { router } = this.props
    // console.log(router.query.pengguna_id)

    // console.log(this.props)

    this.props.router.events.on('routeChangeComplete',()=>{
      // console.log(this.props.router.query.keyword)
      this.setState({
        params:{
          ...this.state.params,
          pengguna_id: this.props.router.query.pengguna_id
        }
      },()=>{
        // console.log(this.state.params)
        AppActions.getPengguna(this.state.params, config.api_base).then((result)=>{
          console.log(result.data.rows)

          if(result.data.result > 0){
            this.setState({
              loading: false,
              pengguna: result.data.rows[0]
            })
          }

        })
      })
    })

  }

  render() {
    const { router } = this.props
    const { pengguna, loading } = this.state

    return (
      <div className="container">
        <Head>
          <title>KitaCerita - Profil {router.query.pengguna_id}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <Layout>
          {/* Profil "<b>{router.query.pengguna_id}</b>" */}
          {loading && 
          <Placeholder>
            <Placeholder.Line length='medium' />
          </Placeholder>
          }
          {!loading &&
          <>
            Profil {pengguna.nama}
          </>
          }

        </Layout>
      </div>
    )
  }
}

export default withRouter(Profil)