import { NextPage } from 'next'
import { GetStaticProps } from 'next'
import React, { useEffect, useState } from 'react'
import { Command } from '../components/Command'
import api from '../services/api'

import styles from '../styles/Commands.module.css'

interface Command {
  name: string,
  description: string
}

const Commands: NextPage<{ commands: Command[] }> = ({ commands }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        COMANDOS

        <ul className={styles.commands}>
          { commands.map(cmd => (
            <li key={cmd.name}>
              <Command command={cmd} />
            </li>
          )) }
        </ul>
      </main>
    </div>
  )
}

export default Commands

export const getStaticProps: GetStaticProps = async () => {
  const res = await api.get('/commands')

  const { data : commands } = res.data
  console.log(commands)

  return {
    props: {
      commands: commands ?? []
    },
    revalidate: 60 * 60 * 24 // 1 day (i think)
  } 
}
