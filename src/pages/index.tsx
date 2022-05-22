import styles from '../styles/Home.module.css'

export default function Home() {
  
  return (
    <div className={styles.container}>
      <main className={styles.main}>
          <img src="https://cdn.discordapp.com/avatars/743261970379309108/95dcbce8b0dec8c8c6d3545af084e60b.png?size=512" alt="Foto de perfil do bot Garçonete" />
          <a href="https://discord.com/oauth2/authorize?client_id=743261970379309108&scope=bot+applications.commands&permissions=380172093505" target="_blank" rel="noreferrer">
            Me adicione clicando aqui
          </a>
      </main>
    </div>
  )
}
