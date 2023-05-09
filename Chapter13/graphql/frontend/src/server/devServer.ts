import { resolve } from 'path'
import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'

// Webpack Configuration
import webpackConfig from '../../webpack.config'
import { ConfigArgs } from '../../webpack/webpack.types'

const devServer: () => void = async () => {
  const clientOptions: ConfigArgs = {
    mode: 'development',
    presets: ['client']
  }

  const serverOptions: ConfigArgs = {
    mode: 'development',
    presets: ['server']
  }

  // Loading client & server configurations
  const serverWebpackConfig = await webpackConfig(serverOptions)
  const clientWebpackConfig = webpack(await webpackConfig(clientOptions))
  let watchServer: any

  if (!watchServer) {
    watchServer = webpack(serverWebpackConfig, (err, stats) => {
      if (stats) {
        // eslint-disable-next-line no-console
        console.log(
          stats.toString({
            chunks: false,
            colors: true
          })
        )
      }
    })
  }

  // Webpack Dev Server Configuration
  const devServerConfig: WebpackDevServer.Configuration = {
    hot: true,
    port: 3001,
    static: resolve('src', 'static'),
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }

  // Starting a Webpack Dev Server on port 3001
  const server = new WebpackDevServer(devServerConfig, clientWebpackConfig)
  server.start()
}

devServer()
