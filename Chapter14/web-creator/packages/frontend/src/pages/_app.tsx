import { ApolloProvider } from '@apollo/client'
import React, { FC } from 'react'

import Config from '~/config'
import GlobalStyle from '~/components/GlobalStyles/GlobalStyles'
import { useApollo } from '~/contexts/apolloClient'
import FormProvider from '~/contexts/form'
import UserProvider from '~/contexts/user'

const App: FC<any> = ({ Component, pageProps }) => {
  const apolloClient = useApollo((pageProps && pageProps.initialApolloState) || {})

  return (
    <>
      <GlobalStyle />
      <ApolloProvider client={apolloClient}>
        <UserProvider>
          <FormProvider>
            <Component {...pageProps} />
          </FormProvider>
        </UserProvider>
      </ApolloProvider>
    </>
  )
}

// @ts-ignore
App.getInitialProps = async () => ({
  ...Config
})

export default App
