import { Configuration } from 'webpack'

const webpackProdConfig: (args: { presets: string[] }) => Configuration = () => {
  const webpackConfig: Configuration = {
    mode: 'production'
  }

  return webpackConfig
}

export default webpackProdConfig
