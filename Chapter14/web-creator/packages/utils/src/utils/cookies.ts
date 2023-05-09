const cookies = {
  get(cookie: string, cookiesStr = '') {
    if (!cookiesStr) {
      cookiesStr = document.cookie
    }

    const cookiesObj = cookiesStr.split('; ').reduce((prev: any, current: string) => {
      const [name, ...value] = current.split('=')
      prev[name] = value.join('=')
      return prev
    }, {})

    return cookiesObj[cookie] ?? null
  },
  set(name: string, value: string, days: number) {
    let expires = ''

    if (days) {
      const date = new Date()
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
      expires = `; expires=${date.toUTCString()}`
    }

    document.cookie = `${name}=${value || ''}${expires}; path=/`
  }
}

export default cookies
