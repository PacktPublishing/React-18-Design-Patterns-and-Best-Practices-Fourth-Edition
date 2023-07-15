import { Button, Input, RenderIf } from '@web-creator/design-system'
import { getRedirectToUrl, redirectTo } from '@web-creator/utils'
import React, { FC, useContext, useState } from 'react'
import { FormContext } from '~/contexts/form'
import { UserContext } from '~/contexts/user'
import { CSS } from './Login.styled'

type Props = {
  background?: string
}

const Login: FC<Props> = () => {
  const redirectToUrl = getRedirectToUrl()

  // States
  const [values, setValues] = useState({
    emailOrUsername: '',
    password: ''
  })

  const [notification, setNotification] = useState({
    id: Math.random(),
    message: ''
  })

  const [invalidLogin, setInvalidLogin] = useState(false)

  // Contexts
  const { change } = useContext(FormContext)
  const { login } = useContext(UserContext)

  // Methods
  const onChange = (e: any): any => change(e, setValues)

  const handleSubmit = async (user: any): Promise<void> => {
    const response = await login(user)

    if (response.error) {
      setInvalidLogin(true)
      setNotification({
        id: Math.random(),
        message: response.message
      })
    } else {
      redirectTo(redirectToUrl || '/', true)
    }
  }

  return (
    <>
      <RenderIf isTrue={invalidLogin && notification.message !== ''}>
        {notification.message}
      </RenderIf>

      <CSS.Login>
        <CSS.LoginBox>
          <header>
            <img className="logo" src="/images/isotype.png" alt="Logo" data-testid="logo" /> <br />
            <h2 data-testid="signin">Sign In</h2>
          </header>

          <section>
            <Input
              autoComplete="off"
              name="emailOrUsername"
              placeholder="Email Or Username"
              data-testid="email"
              onChange={onChange}
              value={values.emailOrUsername}
            />

            <Input
              name="password"
              type="password"
              placeholder="Password"
              data-testid="password"
              onChange={onChange}
              value={values.password}
            />

            <div className="forgot" data-testid="forgot">
              Forgot Password
            </div>

            <div className="actions">
              <Button onClick={(): Promise<void> => handleSubmit(values)} data-testid="login">
                Login
              </Button>
              <Button color="success" data-testid="register">
                Register
              </Button>
            </div>
          </section>
        </CSS.LoginBox>
      </CSS.Login>
    </>
  )
}

export default Login
