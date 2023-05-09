import { FC, useContext } from 'react'

import { UserContext } from '../../contexts/user'
import Login from './Login'

// Interfaces
interface IProps {
  currentUrl: string
}

const Layout: FC<IProps> = ({ currentUrl }) => {
  const { login } = useContext(UserContext)

  return <Login login={login} currentUrl={currentUrl} />
}

export default Layout
