import { security } from '@web-creator/utils'

import { DataType, Sequelize, User } from '../types'

export default (sequelize: Sequelize, dataType: DataType): User => {
  const user = sequelize.define(
    'User',
    {
      id: {
        primaryKey: true,
        allowNull: false,
        type: dataType.UUID,
        defaultValue: dataType.UUIDV4()
      },
      username: {
        type: dataType.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isAlphanumeric: {
            args: true,
            msg: 'The user just accepts alphanumeric characters'
          },
          len: {
            args: [4, 20],
            msg: 'The username must be from 4 to 20 characters'
          }
        }
      },
      password: {
        type: dataType.STRING,
        allowNull: false
      },
      email: {
        type: dataType.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            args: true,
            msg: 'Invalid email'
          }
        }
      },
      role: {
        type: dataType.STRING,
        allowNull: false
      },
      active: {
        type: dataType.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }
    },
    {
      hooks: {
        beforeCreate: (u: User): void => {
          u.password = security.encrypt(u.password)
        }
      }
    }
  )

  return user
}
