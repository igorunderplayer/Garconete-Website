import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import {Command} from '../components/Command'
import api from '../services/api'

import styles from '../styles/Commands.module.css'

interface Command {
  name: string,
  description: string
}

const Commands: NextPage = () => {
  const [commands, setCommands] = useState<Command[]>([])

  useEffect(() => {
    api.get('/commands')
    .then(res => {
      setCommands(res.data.data)
    })
  }, [])

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        COMANDOS

        <ul className={styles.commands}>
          { commands.map(cmd => (
            <li key={cmd.name}>
              <Command name={cmd.name} description={cmd.description} />
            </li>
          )) }
        </ul>
      </main>
    </div>
  )
}

export default Commands
