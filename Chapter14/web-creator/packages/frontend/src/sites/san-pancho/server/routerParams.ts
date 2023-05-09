const getRouterParams = (query: any) => {
  const { page = 'index', params = [], pageNumber } = query
  const [section] = params
  let subSection = ''
  const urlParams: any = {}

  const routeParams = {
    page: page as string,
    section: section as string,
    urlParams,
    subSection: subSection as string,
    queryParams: {
      ...(pageNumber && { pageNumber: pageNumber as string })
    }
  }

  return routeParams
}

export default getRouterParams
