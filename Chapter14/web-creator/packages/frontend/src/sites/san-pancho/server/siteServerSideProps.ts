import Config from '~/config'

const getSiteServerSideProps = async () => {
  const props = {
    site: Config.site,
    siteTitle: Config.siteTitle
  }

  return {
    props
  }
}

export default getSiteServerSideProps
