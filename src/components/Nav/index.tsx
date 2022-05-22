import React, { useContext, useEffect, useState } from 'react'

import Link from 'next/link'

import styles from './styles.module.css'
import { UserContext } from '../../contexts/UserContext'

const Nav: React.FC = () => {
  const { user } = useContext(UserContext)
  const [authUri, setAuthUri] = useState('https://discord.com/api/oauth2/authorize?client_id=743261970379309108&redirect_uri=http://localhost:3000&response_type=code&scope=identify%20guilds')

  useEffect(() => {
    setAuthUri(
      `https://discord.com/api/oauth2/authorize?client_id=743261970379309108&redirect_uri=${window.location.origin}&response_type=code&scope=identify%20guilds`
    )
  }, [])


  return (
    <nav className={styles.container}>
      <ul>
          <li>
            <Link href="/commands">Commands</Link>
          </li>
          { !user && (
          <li>
            <Link href={authUri}>Login</Link>
          </li> 
          )}
      </ul>
    </nav>
  )
}

export { Nav }
