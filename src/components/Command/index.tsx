import React, { useState } from 'react'
import { CommandOption } from '../CommandOption'

import styles from './syles.module.css'

interface Props {
  command: any
}

const Command: React.FC<Props> = ({ command }) => {
  const [expanded, setExpanded] = useState(false)

  const handleOnClick = () => {
    console.log(command.options)
    setExpanded(value => !value)
  }

  return (
    <div className={styles.container} onClick={handleOnClick}>
      {command.name} - {command.description}

      { expanded && (
        <div className={styles.details}>
          { command.options.length > 0 && ( <p>Command options:</p> ) }
          { command.options.map((opt: any) => (
              <CommandOption key={opt.name} option={opt} />
          ))}
        </div>
      ) }
    </div>
  )
}

export { Command }

