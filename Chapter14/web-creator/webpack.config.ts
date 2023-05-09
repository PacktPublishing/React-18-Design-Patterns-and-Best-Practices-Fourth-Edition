import {
  ConfigArgs,
  getWebpackCommonConfig,
  getWebpackDevelopmentConfig,
  getWebpackProductionConfig,
  log
} from '@web-creator/devtools'
import { Configuration } from 'webpack'
import { merge } from 'webpack-merge'

// Mode Config
const getModeConfig = {
  development: getWebpackDevelopmentConfig,
  production: getWebpackProductionConfig
}

// Mode Configuration (development/production)
const modeConfig: (args: ConfigArgs) => Configuration = ({ mode, type, packageName }) => {
  const getWebpackConfiguration = getModeConfig[mode]
  return getWebpackConfiguration({ configType: type, packageName, sandbox: true, devServer: true })
}

// Merging all configurations
const webpackConfig: (args: ConfigArgs) => Promise<Configuration> = async (
  { mode, type, sandbox, packageName } = {
    mode: 'production',
    type: 'web',
    sandbox: 'false',
    packageName: 'design-system'
  }
) => {
  const isSandbox = type === 'package' && sandbox === 'true'
  const commonConfiguration = getWebpackCommonConfig({
    configType: type,
    packageName,
    mode,
    ...(isSandbox && {
      htmlOptions: { title: 'Sandbox', template: 'sandbox/index.html' },
      sandbox: isSandbox,
      devServer: isSandbox
    })
  })

  // Mode Configuration
  const modeConfiguration = mode && type ? modeConfig({ mode, type, packageName }) : {}

  // Merging all configurations
  const webpackConfiguration = merge(commonConfiguration, modeConfiguration)

  // Logging Webpack Configuration
  log({ tag: 'Webpack Configuration', json: webpackConfiguration, type: 'warning' })

  return webpackConfiguration
}

export default webpackConfig
