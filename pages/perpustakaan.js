import React, { Component } from 'react'
import Head from 'next/head'
import { Grid } from 'semantic-ui-react'
import '../styles/global.module.css'
import 'semantic-ui-css/semantic.min.css'
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import { withRouter } from 'next/router'

class Perpustakaan extends Component {
  render() {
    return (
      <div className="container">
        <Head>
          <title>KitaCerita - Perpustakaan</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <Layout>
          <h2>Perpustakaan</h2>
        </Layout>
      </div>
    )
  }
}

export default withRouter(Perpustakaan)

// export default function Beranda() {
//   return (
//     <Layout>
//       isinya beranda
//     </Layout>
//   )
// }