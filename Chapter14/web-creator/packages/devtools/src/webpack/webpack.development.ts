import {
  Configuration as WebpackConfiguration,
  HotModuleReplacementPlugin,
  NoEmitOnErrorsPlugin
} from 'webpack'
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server'

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration
}

const getWebpackDevelopmentConfig = (): Configuration => {
  const webpackConfig: Configuration = {
    mode: 'development',
    devtool: 'source-map',
    plugins: [new HotModuleReplacementPlugin(), new NoEmitOnErrorsPlugin()]
  }

  return webpackConfig
}

export default getWebpackDevelopmentConfig
