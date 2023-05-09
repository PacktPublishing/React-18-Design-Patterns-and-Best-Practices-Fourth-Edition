import HtmlWebpackPlugin from 'html-webpack-plugin'
import { Configuration } from 'webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import WebpackBar from 'webpackbar'

const isAnalyze = Boolean(process.env.ANALYZE)

const webpackClientConfig: (args: { mode: string }) => Configuration = ({ mode }) => {
  const isProductionMode = mode === 'production'
  const title = 'ContentPI'

  const webpackConfig: Configuration = {
    entry: {
      main: './src/client/index.tsx'
    },
    output: {
      publicPath: 'http://localhost:3001/'
    },
    plugins: [
      new HtmlWebpackPlugin({
        title,
        template: './src/client/index.html',
        filename: './index.html'
      }),
      new WebpackBar({
        name: 'client',
        color: '#2EA1F8'
      })
    ]
  }

  if (isProductionMode) {
    webpackConfig.output = {
      filename: '[name].js',
      chunkFilename: '[name].js',
      publicPath: '/'
    }
  }

  if (isAnalyze) {
    webpackConfig.plugins = [
      ...(webpackConfig.plugins || []),
      new BundleAnalyzerPlugin({
        analyzerPort: 9001
      })
    ]
  }

  return webpackConfig
}

export default webpackClientConfig
