import { FC, useContext } from 'react'

import { UserContext } from '../../contexts/user'
import Dashboard from './Dashboard'

const Layout: FC = () => {
  const { connectedUser } = useContext(UserContext)

  // We only render the Dashboard if the user is connected
  if (connectedUser) {
    return <Dashboard connectedUser={connectedUser} />
  }

  return <div />
}

export default Layout
