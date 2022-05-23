import { NextPage } from 'next'
import React, { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'

import styles from '../../styles/UserProfile.module.css'

const UserProfile: NextPage = () => {
  const { user } = useContext(UserContext)

  if (!user) {
    return (
      <div className={styles.container}>
        <main className={styles.main}>
          <h1>You must be logged-in to see this page</h1>
        </main>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        Welcome {user.username}, this is your own page, you can see some things about your account here (or will can see) 
      </main>
    </div>
  )
}

export default UserProfile
