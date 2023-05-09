import { keys, ts } from '@web-creator/utils'
import pg from 'pg'
import { Sequelize } from 'sequelize'

import Config from '../../../config'

// Db Connection
const { engine, port, host, database, username, password } = Config.database ?? {}

const uri = `${engine}://${username}:${password}@${host}:${port}/${database}`
const sequelize = new Sequelize(uri, {
  dialectModule: pg
})

// Models
const addModel = (path: string) => require(path).default(sequelize, Sequelize)

const models: any = {
  User: addModel('../../../models/User'), // Global model
  Guest: addModel('./Guest'), // Local model
  sequelize
}

// Relationships
keys(models).forEach((modelName: string) => {
  if (ts.hasKey(models, modelName)) {
    if (models[modelName].associate) {
      models[modelName].associate(models)
    }
  }
})

export default models
