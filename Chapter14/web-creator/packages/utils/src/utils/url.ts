import is from './is'

export function getLocation(req?: any): any {
  return typeof window !== 'undefined' ? window.location : { pathname: req && req.url }
}

export function getCurrentUrl(): string {
  return getLocation().pathname || ''
}

export function getParams(url: string, index = 0): string | string[] {
  if (!url) {
    url = getLocation().pathname
  }

  if (is.String(url)) {
    if (url.indexOf('?') > -1) {
      url = url.substring(0, url.indexOf('?'))
    }

    const params = url.split('/')
    params.shift()

    if (params[params.length - 1] === '') {
      params.pop()
    }

    if (index) {
      if (is.Defined(params[index])) {
        return params[index]
      }
    }

    return params
  }

  return ''
}

export function redirectTo(url = '/', includeLanguage?: any): void {
  if (is.Browser()) {
    const { pathname } = window.location
    let slash = '/'

    if (url === '_self') {
      window.location.href = pathname
    } else {
      window.location.href = url
    }
  }
}

export function getRedirectToUrl() {
  return is.Browser() ? window.location.search.replace('?redirectTo=', '') : ''
}

export function buildUrl(params: string[]) {
  return params.filter((v) => v).join('/')
}
