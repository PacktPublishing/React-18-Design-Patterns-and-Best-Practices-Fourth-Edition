import dynamic from 'next/dynamic'
import React from 'react'

import Switcher, { Props } from '~/components/Switcher'

const dynamicPages: Record<string, Record<string, any>> = {
  index: {
    index: dynamic(() => import('./pages/index'))
  },
  login: {
    index: dynamic(() => import('./pages/login'))
  },
  dashboard: {
    index: dynamic(() => import('./pages/dashboard/index'))
  }
}

export default ({ routerParams, siteTitle, props }: Props) => (
  <Switcher
    routerParams={routerParams}
    siteTitle={siteTitle}
    props={props}
    dynamicPages={dynamicPages}
  />
)
