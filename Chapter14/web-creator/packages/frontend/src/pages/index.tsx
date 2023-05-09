import React, { FC } from 'react'

import Config from '~/config'

const SwitcherPage = require(`~/sites/${Config.site}/switcher`).default
const getRouterParams = require(`~/sites/${Config.site}/server/routerParams`).default

type Props = {
  siteTitle: string
}

const Page: FC<Props> = ({ siteTitle }) => {
  const routerParams = getRouterParams({})

  return <SwitcherPage routerParams={routerParams} siteTitle={siteTitle} />
}

export default Page
