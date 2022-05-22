import React from 'react'

import styles from './styles.module.css'

const Nav: React.FC = () => {
  return (
    <nav className={styles.container}>
      NavBar
      <ul>
          <li>Sexo</li>
          <li>Nekos</li>
          <li>Lolis</li>
      </ul>
    </nav>
  )
}

export { Nav }