import React from 'react'
import Link from 'next/link'

import { Nav } from '../Nav'

import styles from './styles.module.css'

const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <Link href="/">
        Garçonete
      </Link>
      <Nav />
    </header>
  )
}

export { Header }
