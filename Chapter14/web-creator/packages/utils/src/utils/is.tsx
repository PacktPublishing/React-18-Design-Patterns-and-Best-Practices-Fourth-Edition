const is = {
  Array(v: unknown) {
    return v instanceof Array
  },
  Defined(v: unknown) {
    return typeof v !== 'undefined' && v !== null
  },
  Email(email: string) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    return regex.test(email)
  },
  False(v: unknown) {
    return (this.Defined(v) && v === false) || v === 'false'
  },
  Number(v: unknown) {
    return typeof v === 'number'
  },
  Function(v: unknown) {
    return typeof v === 'function'
  },
  Object(v: unknown) {
    return this.Defined(v) && typeof v === 'object' && !this.Array(v)
  },
  String(v: unknown) {
    return this.Defined(v) && typeof v === 'string'
  },
  Undefined(v: unknown) {
    return typeof v === 'undefined' || v === null
  },
  JSON(str: string) {
    if (!str || str === null) {
      return false
    }

    try {
      JSON.parse(str)
    } catch (e) {
      return false
    }

    return true
  },
  Password(password: string, min = 8) {
    return Boolean(password && password.length >= min)
  },
  PasswordMatch(p1: string, p2: string) {
    return this.Password(p1) && this.Password(p2) && p1 === p2
  },
  Browser() {
    return typeof window !== 'undefined'
  },
  Device() {
    if (!this.Browser()) {
      return false
    }

    const ua = navigator.userAgent

    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return true
    }

    if (
      /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        ua
      )
    ) {
      return true
    }

    return false
  },
  EmptyObject(v: any) {
    return v ? Object.keys(v).length === 0 : true
  }
}

export default is
