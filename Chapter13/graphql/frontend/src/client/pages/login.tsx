import { isBrowser } from '@contentpi/lib'
import { FC } from 'react'

import LoginLayout from '../components/users/LoginLayout'
import UserProvider from '../contexts/user'

interface IProps {
  currentUrl?: string
}

const Page: FC<IProps> = ({
  currentUrl = isBrowser() ? window.location.search.replace('?redirectTo=', '') : ''
}) => (
  <UserProvider page="login">
    <LoginLayout currentUrl={currentUrl} />
  </UserProvider>
)

export default Page
