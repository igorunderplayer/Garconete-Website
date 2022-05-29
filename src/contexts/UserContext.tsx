import {useRouter} from 'next/router'
import React, { createContext, useEffect, useState } from 'react'
import api from '../services/api'

export interface IUser {
  id: string
  username: string
  avatar: string
  discriminator: string
  flags: number
  bannerColor: string
  accentColor: number
}

export interface IRawUser {
  id: string
  username: string
  avatar: string
  discriminator: string
  flags: number
  banner_color: string
  accent_color: number
}


export const UserContext = createContext({} as {
  user: IUser
  setUser: React.Dispatch<React.SetStateAction<IUser>>
})

interface Props {
  children?: React.ReactNode
}

export const UserProvider: React.FC<Props> = (props) => {
  const router = useRouter()
  const [user, setUser] = useState<IUser>(null)

  const loginWithCode = async (code: string) => {
    try {
      const res = await api.post<{ message: string, data: IRawUser, token: string}>('/auth/login', {
        code
      })

      if (res.data?.data) {
        const { data } = res.data
        setUser({
          id: data.id,
          username: data.username,
          avatar: data.avatar,
          discriminator: data.discriminator,
          flags: data.flags,
          bannerColor: data.banner_color,
          accentColor: data.accent_color
        })

        localStorage.setItem('token', res.data.token)

        router.replace('/')
      }
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    const { code } = router.query
    if (code && typeof code === 'string') {
      loginWithCode(code)
      return
    }

    const token = localStorage.getItem('token')

    if (!user && token) {
      try {
        api.get('users/@me', {
          headers: {
            authorization: token
          }
        }).then(res => {
          if (res.status == 200) {
            const { user } = res.data
            console.log(user)

            setUser(user)
        }
      })
      } catch(err) {
        console.error(err)
        localStorage.removeItem('token')
      }
    }

  }, [router])

  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children} 
    </UserContext.Provider>
  )
}
