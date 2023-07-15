import { Configuration } from 'webpack'

import { ModeArgs } from './webpack.types'

const getWebpackProductionConfig = (args: ModeArgs): Configuration => {
  const { configType } = args

  // Externals
  const externals =
    configType === 'package'
      ? {
          react: {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'React',
            root: 'React'
          },
          'react-dom': {
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'ReactDOM',
            root: 'ReactDOM'
          },
          jsonwebtoken: 'jsonwebtoken'
        }
      : {}

  const webpackConfig = {
    mode: 'production',
    devtool: false,
    externals
  }

  return webpackConfig as Configuration
}

export default getWebpackProductionConfig
