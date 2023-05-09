import { is } from '@web-creator/utils'

// Importing sites configurations
import { config as blankPageConfig } from './sites/blank-page/config'
import { config as sanPanchoConfig } from './sites/san-pancho/config'
import { config as codejobsConfig } from './sites/codejobs/config'
import { Site, SiteBuilderConfiguration, SiteConfiguration } from './types/config'

const isProduction = process.env.NODE_ENV === 'production'
const isLocal = process.env.LOCAL === 'true'
const isLocalProduction = isProduction && isLocal

// Getting site configuration
const getSiteConfig = (site: Site): SiteConfiguration => {
  switch (site) {
    case Site.SanPancho:
      return sanPanchoConfig
    case Site.Codejobs:
      return codejobsConfig
    default:
      return blankPageConfig
  }
}

// Building configuration
const buildConfig = (): SiteBuilderConfiguration => {
  // Server site
  let site = process.env.SITE as Site

  // In client side we grab the site from Next props
  if (is.Browser()) {
    const { props } = window.__NEXT_DATA__

    if (props && props.site) {
      site = props.site
    }
  } else if (!site) {
    throw 'You must specify a site (E.g. SITE=san-pancho npm run dev)'
  }

  const siteConfig = getSiteConfig(site)

  // Building configuration based on the environment and site configuration
  const config: SiteBuilderConfiguration = {
    ...siteConfig,
    api: {
      uri:
        isProduction && !isLocalProduction
          ? `https://${siteConfig.domainName}/graphql`
          : 'http://localhost:4000/graphql'
    },
    site,
    homeUrl: `https://${siteConfig.domainName}`,
    hostname: isProduction && !isLocalProduction ? siteConfig.domainName : 'localhost',
    mode: isProduction ? 'production' : 'development'
  }

  return config
}

const Config = buildConfig()

export default Config
