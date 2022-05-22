import React from 'react'
import { Nav } from '../Nav'

import styles from './styles.module.css'

const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      Header
      <Nav />
    </header>
  )
}

export { Header }