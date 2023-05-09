export type WebpackMode = 'production' | 'development'
export type ConfigType = 'web' | 'package'
export type Package = 'api' | 'design-system' | 'frontend' | 'i18n' | 'utils'
export type ConfigArgs = {
  mode: WebpackMode
  type: ConfigType
  sandbox?: 'true' | 'false'
  packageName: Package
}
export type ModeArgs = {
  configType: ConfigType
  packageName: Package
  mode?: WebpackMode
  sandbox?: boolean
  devServer?: boolean
  isAnalyze?: boolean
  port?: number
  analyzerPort?: number
  color?: string
  htmlOptions?: {
    title: string
    template: string
  }
}
