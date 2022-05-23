import React, {useContext} from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Nav } from '../Nav'
import { UserContext } from '../../contexts/UserContext'

import styles from './styles.module.css'

const Header: React.FC = () => {
  const { user } = useContext(UserContext)
  return (
    <header className={styles.container}>
      <Link href="/">
        Garçonete
      </Link>
      <Nav />
      
      { !!user && (
        <Link href="/users/@me">
          <div className={styles.user}>
            {user.username}
            <div className={styles.userAvatar} style={{ borderColor: user.bannerColor }}>
              <Image
                src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=512`}
                alt="Foto de perfil do usuario"
                className={styles.userAvatarImage}
                height={40}
                width={40}
              />
            </div>
          </div>
        </Link>
      )}
    </header>
  )
}

export { Header }
