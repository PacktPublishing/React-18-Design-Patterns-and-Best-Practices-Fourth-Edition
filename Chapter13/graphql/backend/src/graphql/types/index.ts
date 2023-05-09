import { mergeTypeDefs } from '@graphql-tools/merge'

import Scalar from './Scalar'
import User from './User'

export default mergeTypeDefs([Scalar, User])
