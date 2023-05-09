const breakpoints: any = {
  mobile: '640px',
  mobileXl: '767px',
  tablet: '1024px',
  laptop: '1280px',
  laptopXl: '1440px',
  desktop: '1441px'
}

export const device = {
  mobile: `@media only screen and (max-width: ${breakpoints.mobile})`,
  mobileXl: `@media only screen and (max-width: ${breakpoints.mobileXl})`,
  tablet: `@media only screen and (max-width: ${breakpoints.tablet})`,
  laptop: `@media only screen and (max-width: ${breakpoints.laptop})`,
  laptopXl: `@media only screen and (max-width: ${breakpoints.laptopXl})`,
  desktop: `@media only screen and (min-width: ${breakpoints.desktop})`
}
