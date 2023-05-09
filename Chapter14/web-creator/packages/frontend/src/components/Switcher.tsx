import React, { FC } from 'react'

import ErrorPage from '~/components/ErrorPage'

type Route = {
  page: string
  section?: string
  subSection?: string
  urlParams?: string[]
  queryParams?: Record<string, string>
}

export type Props = {
  routerParams: Route
  siteTitle: string
  props?: Record<string, any>
  dynamicPages: any
}

const Switcher: FC<Props> = ({ routerParams, props = {}, dynamicPages: sitePages }) => {
  const { page, section = 'index', subSection = '', urlParams, queryParams = {} } = routerParams

  const extraProps = {
    queryParams,
    router: {
      section,
      subSection
    },
    ...urlParams
  }

  const pageName = page
  let PageToRender

  let sectionPages: any = {}

  if (sitePages[pageName]) {
    sectionPages = sitePages[pageName]
    PageToRender = sectionPages.index

    if (sectionPages[section][subSection]) {
      PageToRender = sectionPages[section][subSection]
    } else if (section !== 'index') {
      PageToRender = sectionPages[section].index
    }
  } else {
    PageToRender = ErrorPage
  }

  return <PageToRender {...props} {...extraProps} />
}

export default Switcher
