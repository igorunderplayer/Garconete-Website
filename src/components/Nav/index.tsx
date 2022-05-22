import React from 'react'

import Link from 'next/link'

import styles from './styles.module.css'

const Nav: React.FC = () => {
  return (
    <nav className={styles.container}>
      <ul>
          <li>
            <Link href="/commands">Commands</Link>
          </li>
      </ul>
    </nav>
  )
}

export { Nav }
