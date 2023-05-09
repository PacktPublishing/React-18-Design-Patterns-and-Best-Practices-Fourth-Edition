import { mergeResolvers } from '@graphql-tools/merge'

import user from '../../../../graphql/resolvers/user'
import guest from './guest'

const resolvers = mergeResolvers([user, guest])

export default resolvers
