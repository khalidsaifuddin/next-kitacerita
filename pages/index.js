import Head from 'next/head'
import Beranda from './beranda'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>KitaCerita</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Beranda />
    </div>
  )
}
