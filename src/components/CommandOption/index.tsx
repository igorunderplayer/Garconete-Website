import React from 'react'

import styles from './styles.module.css'

interface Props {
  option: {
    name: string
    description: string
    type: 'USER' | string
    required: boolean
    options?: (Props['option'])[]
  }
}

const CommandOption: React.FC<Props> = ({ option }) => {
  return (
    <div className={styles.container}>
      { option.type === 'SUB_COMMAND' ? (
        <>
          SUBCOMANDO
          <p>Nome do subcomando: {option.name}</p>
          <p>Options do subcomando:</p>
          { option.options?.map(opt => (
            <CommandOption key={opt.name} option={opt} />
          )) }
        </>
        ) : (
        <>
          <p>Name: {option.name}</p>
          <p>Description: {option.description}</p>
          <p>Type: {option.type.toLowerCase()}</p>
          <p>Required: {(option.required ?? false).toString()}</p>
        </>
      )}
    </div>
  )
}

export { CommandOption }
