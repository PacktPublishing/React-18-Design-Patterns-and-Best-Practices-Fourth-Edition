import { resolve } from 'path'
import { RunScriptWebpackPlugin } from 'run-script-webpack-plugin'
import { Configuration, IgnorePlugin, optimize } from 'webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import nodeExternals from 'webpack-node-externals'
import WebpackBar from 'webpackbar'

const isAnalyze = Boolean(process.env.ANALYZE)

const webpackServerConfig: (args: { mode: string }) => Configuration = ({ mode }) => {
  const isDevelopment = mode === 'development'

  const webpackConfig: Configuration = {
    target: 'node',
    entry: './src/server/index.ts',
    output: {
      libraryTarget: 'commonjs2',
      filename: 'server.js',
      path: resolve('dist')
    },
    externals: [nodeExternals()],
    plugins: [
      new optimize.LimitChunkCountPlugin({
        maxChunks: 1
      }),
      new IgnorePlugin({
        resourceRegExp: /\.((sc|c)ss|jpe?g|png|gif|svg)$/i
      }),
      new WebpackBar({
        name: 'server',
        color: '#2EA1F8',
        profile: true,
        basic: false
      })
    ]
  }

  if (isDevelopment) {
    webpackConfig.watch = true

    if (webpackConfig.entry instanceof Array) {
      webpackConfig.entry.unshift('webpack/hot/poll?300')
    }

    if (webpackConfig.plugins instanceof Array) {
      webpackConfig.plugins.push(
        new RunScriptWebpackPlugin({
          name: 'server.js',
          nodeArgs: ['--inspect']
        })
      )
    }

    webpackConfig.externals = [
      nodeExternals({
        allowlist: ['webpack/hot/poll?300']
      })
    ]
  }

  if (isAnalyze) {
    webpackConfig.plugins = [
      ...(webpackConfig.plugins || []),
      new BundleAnalyzerPlugin({
        analyzerPort: 9002
      })
    ]
  }

  return webpackConfig
}

export default webpackServerConfig
