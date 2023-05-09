import { mergeResolvers } from '@graphql-tools/merge'

import user from './user'

const resolvers = mergeResolvers([user])

export default resolvers
