import dotenv from 'dotenv'

// Here you can add your custon services configuration
import { config as crmConfig } from './services/crm/config'
import { config as blankServiceConfig } from './services/default/config'
import { Service, ServiceBuilderConfiguration, ServiceConfiguration } from './types/config'

// Loading Env vars
dotenv.config()

const getServiceConfig = (service: Service): ServiceConfiguration => {
  switch (service) {
    // Add your custom services here
    case Service.CRM:
      return crmConfig
    default:
      return blankServiceConfig
  }
}

const buildConfig = (): ServiceBuilderConfiguration => {
  const service = process.env.SERVICE as Service

  if (!service) {
    throw 'You must specify a service (E.g. SERVICE=crm npm run dev)'
  }

  const serviceConfig = getServiceConfig(service)

  const config: ServiceBuilderConfiguration = {
    ...serviceConfig,
    database: {
      ...serviceConfig.database,
      engine: process.env.DB_ENGINE,
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD
    },
    service
  }

  return config
}

// Building the config
const Config = buildConfig()

export default Config
