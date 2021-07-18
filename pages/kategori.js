import React, { Component } from 'react'
import Head from 'next/head'
import { Grid } from 'semantic-ui-react'
import '../styles/global.module.css'
import 'semantic-ui-css/semantic.min.css'
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import { withRouter } from 'next/router'
import CardKategori from './components/cardKategori'

class Kategori extends Component {
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
          <Grid style={{padding:'8px'}}>
            <Grid.Column mobile={16} tablet={8} computer={4} style={{padding:'8px'}}>
              <CardKategori minWidth={'100%'} maxWidth={'100%'} margin={'0px'} />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={4} style={{padding:'8px'}}>
              <CardKategori minWidth={'100%'} maxWidth={'100%'} margin={'0px'} />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={4} style={{padding:'8px'}}>
              <CardKategori minWidth={'100%'} maxWidth={'100%'} margin={'0px'} />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={4} style={{padding:'8px'}}>
              <CardKategori minWidth={'100%'} maxWidth={'100%'} margin={'0px'} />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={4} style={{padding:'8px'}}>
              <CardKategori minWidth={'100%'} maxWidth={'100%'} margin={'0px'} />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={4} style={{padding:'8px'}}>
              <CardKategori minWidth={'100%'} maxWidth={'100%'} margin={'0px'} />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={4} style={{padding:'8px'}}>
              <CardKategori minWidth={'100%'} maxWidth={'100%'} margin={'0px'} />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={4} style={{padding:'8px'}}>
              <CardKategori minWidth={'100%'} maxWidth={'100%'} margin={'0px'} />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={4} style={{padding:'8px'}}>
              <CardKategori minWidth={'100%'} maxWidth={'100%'} margin={'0px'} />
            </Grid.Column>
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