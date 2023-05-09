import { ValueOf } from '@web-creator/utils'

export const Service = {
  CRM: 'crm'
} as const

export type Service = ValueOf<typeof Service>

export type Mode = 'production' | 'development'

export enum DeploymentType {
  PRODUCTION = 'production',
  STAGING = 'staging',
  DEVELOPMENT = 'development'
}

export interface ServiceConfiguration {
  domainName: string
  port: number
  database?: {
    engine?: string
    port?: number
    host?: string
    database?: string
    username?: string
    password?: string
  }
}

export interface ServiceBuilderConfiguration extends ServiceConfiguration {
  service: Service
}
