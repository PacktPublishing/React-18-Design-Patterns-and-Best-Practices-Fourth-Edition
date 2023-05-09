const path = require('path')

module.exports = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback.fs = false
    }

    // Aliases
    config.resolve.alias['~'] = path.resolve(__dirname, './src')

    return config
  }
}
