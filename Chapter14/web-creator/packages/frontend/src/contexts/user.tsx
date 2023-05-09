import { useMutation, useQuery } from '@apollo/client'
import { getGraphQlError } from '@web-creator/utils'
import React, { createContext, FC, ReactElement, useEffect, useMemo, useState } from 'react'
import { useCookies } from 'react-cookie'

import Config from '~/config'
import GET_USER_QUERY from '~/graphql/user/getUser.query'
import LOGIN_MUTATION from '~/graphql/user/login.mutation'

// Interfaces
interface IUserContext {
  login(input: any): any
  user: any
}

type Props = {
  children: ReactElement
}

// Creating context
export const UserContext = createContext<IUserContext>({
  login: () => null,
  user: null
})

const UserProvider: FC<Props> = ({ children }) => {
  // States
  const [cookies, setCookie] = useCookies()
  const [user, setUser] = useState(null)

  // Mutations
  const [loginMutation] = useMutation(LOGIN_MUTATION)

  // Queries
  const { data: dataUser } = useQuery(GET_USER_QUERY, {
    variables: {
      at: cookies[`at-${Config.site}`] || ''
    }
  })

  // Effects
  useEffect(() => {
    if (dataUser) {
      setUser(dataUser.getUser)
    }
  }, [dataUser])

  async function login(input: { emailOrUsername: string; password: string }): Promise<any> {
    try {
      const { data: dataLogin } = await loginMutation({
        variables: {
          emailOrUsername: input.emailOrUsername,
          password: input.password
        }
      })

      if (dataLogin) {
        setCookie(`at-${Config.site}`, dataLogin.login.token, { path: '/', maxAge: 45 * 60 * 1000 })

        return dataLogin.login.token
      }
    } catch (err) {
      return getGraphQlError(err)
    }

    return null
  }

  const context = useMemo(
    () => ({
      login,
      user
    }),
    [user]
  )

  return <UserContext.Provider value={context}>{children}</UserContext.Provider>
}

export default UserProvider
