import { Configuration, HotModuleReplacementPlugin, NoEmitOnErrorsPlugin } from 'webpack'

const webpackDevConfig: () => Configuration = () => {
  const webpackConfig: Configuration = {
    mode: 'development',
    devtool: 'source-map',
    output: {
      filename: '[name].js'
    },
    plugins: [new HotModuleReplacementPlugin(), new NoEmitOnErrorsPlugin()]
  }

  return webpackConfig
}

export default webpackDevConfig
