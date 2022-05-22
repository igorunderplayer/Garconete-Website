import React, { useState } from 'react'

import styles from './syles.module.css'

interface Props {
  name: string
  description: string
}

const Command: React.FC<Props> = ({ name, description }) => {
  const [expanded, setExpanded] = useState(false)

  const handleOnClick = () => {
    setExpanded(value => !value)
  }

  return (
    <div className={styles.container} onClick={handleOnClick}>
      {name} - {description}

      { expanded && (
        <div>
          afafas fsahfosahfoahfsau hahfuoashfou ahfuoasfh asfsoau hfoasfashifs asfsoaufasjfiasjf
          fsajfiasfjias fais f ashfsaf aos
        </div>
      ) }
    </div>
  )
}

export { Command }
