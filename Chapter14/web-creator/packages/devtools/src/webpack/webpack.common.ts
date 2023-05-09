import HtmlWebPackPlugin from 'html-webpack-plugin'
import path from 'path'
import createStyledComponentsTransformer from 'typescript-plugin-styled-components'
import { Configuration } from 'webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import nodeExternals from 'webpack-node-externals'

import { ModeArgs } from './webpack.types'

const getWebpackCommonConfig = (args: ModeArgs): Configuration => {
  const {
    configType,
    isAnalyze,
    port = 3000,
    mode,
    analyzerPort = 9001,
    packageName,
    htmlOptions,
    sandbox,
    devServer
  } = args

  const devServerPort = sandbox && devServer ? 8080 : port + 1

  // Client Entry
  const entry =
    configType !== 'web'
      ? path.resolve(__dirname, `../../../${packageName}/src/index.ts`)
      : path.resolve(__dirname, `../../../${packageName}/src/index.tsx`)

  // Resolve
  const resolve = {
    extensions: ['*', '.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '~': path.resolve(__dirname, `../../../${packageName}/src`)
    },
    fallback: {
      buffer: false,
      crypto: false,
      stream: false,
      querystring: false,
      os: false,
      zlib: false,
      http: false,
      https: false,
      url: false,
      path: require.resolve('path-browserify')
    }
  }

  // Output
  const output = {
    path: path.resolve(__dirname, `../../../${packageName}/dist`),
    filename: '[name].js',
    ...(sandbox && {
      publicPath: '/',
      chunkFilename: '[name].js'
    }),
    ...(configType === 'package' &&
      !sandbox && {
        filename: 'index.js',
        libraryTarget: 'umd',
        library: 'lib',
        umdNamedDefine: true,
        globalObject: 'this'
      })
  }

  // Plugins
  const plugins = []

  if (isAnalyze) {
    plugins.push(
      new BundleAnalyzerPlugin({
        analyzerPort
      })
    )
  }

  if (mode === 'development' && htmlOptions?.title && htmlOptions.template) {
    plugins.push(
      new HtmlWebPackPlugin({
        title: htmlOptions.title,
        template: path.resolve(__dirname, `../../../${packageName}/${htmlOptions.template}`),
        filename: './index.html'
      })
    )
  }

  // Rules
  const rules = []

  rules.push({
    test: /\.(tsx|ts)$/,
    exclude: /node_modules/,
    loader: 'ts-loader',
    options: {
      getCustomTransformers: () => ({
        before: [
          createStyledComponentsTransformer({
            displayName: true,
            ssr: true,
            minify: true
          })
        ]
      })
    }
  })

  if (packageName === 'design-system') {
    const svgUrlLoaderInclude: Record<string, string[]> = {
      'design-system': [
        path.resolve(__dirname, '../../../design-system/src/components/Spinner/loaders'),
        path.resolve(__dirname, '../../../design-system/src/components/Dialog/icons'),
        path.resolve(__dirname, '../../../design-system/src/icons')
      ]
    }

    const svgrWebpackInclude: Record<string, string[]> = {
      'design-system': [path.resolve(__dirname, '../../../design-system/src/components/Icon/icons')]
    }

    rules.push({
      test: /\.svg$/,
      oneOf: [
        {
          use: 'svg-url-loader',
          include: configType === 'package' ? svgUrlLoaderInclude[packageName] ?? [] : []
        },
        {
          use: '@svgr/webpack',
          include: configType === 'package' ? svgrWebpackInclude[packageName] ?? [] : []
        }
      ]
    })
  }

  if (configType === 'package' && sandbox) {
    rules.push({
      test: /\.(jpe?g|png|gif|svg)$/i,
      use: [{ loader: 'file-loader', options: {} }]
    })
  }

  const webpackConfig = {
    entry,
    ...(configType === 'package' &&
      sandbox && {
        entry: path.resolve(__dirname, `../../../${packageName}/sandbox/index.tsx`)
      }),
    ...(devServer && {
      devServer: {
        historyApiFallback: true,
        static: output.path,
        port: devServerPort
      }
    }),
    ...(!sandbox && {
      externals: [nodeExternals()]
    }),
    output,
    resolve,
    plugins,
    module: {
      rules
    },
    ...(configType !== 'web' &&
      !sandbox && {
        target: 'node'
      })
  }

  return webpackConfig as Configuration
}

export default getWebpackCommonConfig
