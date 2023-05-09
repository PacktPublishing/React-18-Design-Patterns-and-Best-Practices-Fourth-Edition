import Config from '~/config'

const getSiteServerSideProps = async ({ req }: any) => {
  const props = {
    site: Config.site,
    siteTitle: Config.siteTitle
  }

  return {
    props
  }
}

export default getSiteServerSideProps
