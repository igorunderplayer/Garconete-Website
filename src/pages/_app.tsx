import Head from 'next/head'
import { UserProvider } from '../contexts/UserContext'

import { Header } from '../components/Header'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Head>
        <title>Garçonete UnderPlayer</title>
      </Head>

      <Header />
      <Component {...pageProps} />
    </UserProvider>
  )
}

export default MyApp
