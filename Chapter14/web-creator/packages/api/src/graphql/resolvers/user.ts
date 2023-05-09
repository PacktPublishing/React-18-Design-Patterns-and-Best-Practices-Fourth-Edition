import { authenticate, getUserBy, getUserData } from '@web-creator/authentication'
import { ICreateUser, ILogin, Model } from '../../types'

// Queries
const getUsers = (_: any, _args: any, { models }: { models: Model }) => models.User.findAll()

const getUser = async (_: any, { at }: { at: string }, { models }: { models: Model }) => {
  const connectedUser = await getUserData(at)

  if (connectedUser) {
    // Validating if the user is still valid
    const user = await getUserBy(
      {
        id: connectedUser.id,
        email: connectedUser.email,
        active: connectedUser.active
      },
      [connectedUser.role],
      models
    )

    if (user) {
      return {
        ...connectedUser
      }
    }
  }

  return {
    id: '',
    username: '',
    email: '',
    role: '',
    active: false
  }
}

// Mutations
const createUser = (_: any, { input }: { input: ICreateUser }, { models }: { models: Model }) =>
  models.User.create({ ...input })

const login = (_: any, { input }: { input: ILogin }, { models }: { models: Model }) =>
  authenticate(input.emailOrUsername, input.password, models)

export default {
  Query: {
    getUser,
    getUsers
  },
  Mutation: {
    createUser,
    login
  }
}
