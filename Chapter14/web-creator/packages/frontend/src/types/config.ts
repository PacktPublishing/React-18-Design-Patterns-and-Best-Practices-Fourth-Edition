import { ValueOf } from '@web-creator/utils'

export const Site = {
  SanPancho: 'san-pancho',
  Codejobs: 'codejobs',
  BlankPage: 'blank-page'
} as const

export type Site = ValueOf<typeof Site>

export type Mode = 'production' | 'development'

export enum DeploymentType {
  PRODUCTION = 'production',
  STAGING = 'staging',
  DEVELOPMENT = 'development'
}

export interface SiteConfiguration {
  siteTitle: string
  domainName: string
  hostname?: string
  mode?: string
  api?: {
    uri: string
  }
  pages: string[]
  custom?: any
}

export interface SiteBuilderConfiguration extends SiteConfiguration {
  site: Site
  homeUrl: string
}
