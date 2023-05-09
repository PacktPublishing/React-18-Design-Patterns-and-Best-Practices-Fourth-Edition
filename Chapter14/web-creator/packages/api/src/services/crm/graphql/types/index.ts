import { mergeTypeDefs } from '@graphql-tools/merge'

// Global Types
import Error from '../../../../graphql/types/Error'
import Scalar from '../../../../graphql/types/Scalar'
import User from '../../../../graphql/types/User'

// Local Types
import Guest from './Guest'

export default mergeTypeDefs([Error, Scalar, User, Guest])
