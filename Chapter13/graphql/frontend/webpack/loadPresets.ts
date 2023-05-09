import { Configuration } from 'webpack'
import { merge } from 'webpack-merge'

import { ConfigArgs } from './webpack.types'

const loadPresets: (mode: ConfigArgs) => Promise<Configuration> = async (env) => {
  const presets: string[] = ([] as string[]).concat(...[env.presets])

  const webpackConfigs = await Promise.all(
    presets.map(async (presetName: string) => {
      try {
        const { default: webpackConfig } = await import(`./presets/webpack.${presetName}`)

        return Promise.resolve(webpackConfig(env))
      } catch (err) {
        return Promise.resolve({})
      }
    })
  )

  return merge({}, ...webpackConfigs)
}

export default loadPresets
