import { UserProvider } from '../contexts/UserContext'

import { Header } from '../components/Header'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Header />
      <Component {...pageProps} />
    </UserProvider>
  )
}

export default MyApp
