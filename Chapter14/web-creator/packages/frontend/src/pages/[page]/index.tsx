import { useRouter } from 'next/router'
import React, { FC } from 'react'

import Config from '~/config'

const SwitcherPage = require(`~/sites/${Config.site}/switcher`).default
const getRouterParams = require(`~/sites/${Config.site}/server/routerParams`).default

type Props = {
  siteTitle: string
  serverData: any
}

const Page: FC<Props> = ({ siteTitle, serverData }) => {
  const router = useRouter()
  const routerParams = getRouterParams(router.query)

  return <SwitcherPage routerParams={routerParams} siteTitle={siteTitle} props={{ serverData }} />
}

export default Page
