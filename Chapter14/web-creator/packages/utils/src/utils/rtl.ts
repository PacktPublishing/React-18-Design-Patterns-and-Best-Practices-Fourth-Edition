const rtlLangs = [
  'ae' /* Avestan */,
  'ar' /* 'العربية', Arabic */,
  'arc' /* Aramaic */,
  'bcc' /* 'بلوچی مکرانی', Southern Balochi */,
  'bqi' /* 'بختياري', Bakthiari */,
  'ckb' /* 'Soranî / کوردی', Sorani */,
  'dv' /* Dhivehi */,
  'fa' /* 'فارسی', Persian */,
  'glk' /* 'گیلکی', Gilaki */,
  'he' /* 'עברית', Hebrew */,
  'ku' /* 'Kurdî / كوردی', Kurdish */,
  'mzn' /* 'مازِرونی', Mazanderani */,
  'nqo' /* N'Ko */,
  'pnb' /* 'پنجابی', Western Punjabi */,
  'ps' /* 'پښتو', Pashto, */,
  'sd' /* 'سنڌي', Sindhi */,
  'ug' /* 'Uyghurche / ئۇيغۇرچە', Uyghur */,
  'ur' /* 'اردو', Urdu */,
  'yi'
]
const regexParseLocale = /^([a-zA-Z]*)([_\-a-zA-Z]*)$/
const rtlRegex = /[\u0591-\u07FF]/

const parseLocale = (strLocale: string) => {
  const matches = regexParseLocale.exec(strLocale)

  if (!strLocale || !matches) {
    return false
  }

  // matches[2] = self._trim(matches[2], ['-', '_'])

  const lang = matches[1].toLowerCase()
  const countryCode = (matches[2] || '').toUpperCase()

  return {
    lang,
    countryCode
  }
}

const rtl = {
  isRtlText(text: string) {
    rtlRegex.test(text)
  },
  isRtlLang(strLocale: string) {
    const objLocale = parseLocale(strLocale)

    if (!objLocale) {
      return false
    }

    return rtlLangs.indexOf(objLocale.lang) >= 0
  },
  getLangDir(strLocale: string) {
    return this.isRtlLang(strLocale) ? 'rtl' : 'ltr'
  }
}

export default rtl
