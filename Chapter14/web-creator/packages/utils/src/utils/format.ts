import currencyFormatter from 'currency-formatter'

const format = {
  money(amount: number, currency = 'MXN') {
    return currencyFormatter.format(amount, { code: currency })
  }
}

export default format
