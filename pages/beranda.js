import React, { Component } from 'react'
import main from './_app'
import { Grid } from 'semantic-ui-react'
import '../styles/global.module.css'
import 'semantic-ui-css/semantic.min.css'
import Layout from './components/Layout'
import { withRouter } from 'next/router'

class Beranda extends Component {
  render() {
    return (
      <Layout>
        isinya beranda
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