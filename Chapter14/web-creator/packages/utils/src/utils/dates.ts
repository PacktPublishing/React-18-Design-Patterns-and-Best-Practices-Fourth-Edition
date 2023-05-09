import { ucwords } from './capitalize'
import is from './is'

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

const dates = {
  addDays: (date: any, count = 1) => {
    date.setDate(date.getDate() + count)
    return date.toISOString().split('T')[0]
  },
  getLongDate: (date: string, locale = 'en-US') => {
    const initialDate = new Date(date)

    const day = ucwords(
      initialDate.toLocaleDateString(locale, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    )

    return day
  },
  getMonthAndDay: (date: string, t: any, locale = 'en-US') => {
    const [, month, day] = date.split('-')
    const monthText = t(dates.months[Number(month) - 1].toLowerCase(), {}, locale)

    return `${monthText} ${day}`
  },
  isValidDate: (dateStr = '') => {
    if (!dateStr || !is.String(dateStr)) {
      return false
    }

    const splitter = dateStr && dateStr.indexOf('/') !== -1 ? '/' : '-'

    const [y = '', m = '', d = ''] = dateStr.split(splitter)

    if (d.length !== 2 || m.length !== 2 || y.length !== 4) {
      return false
    }

    if (y && m && d) {
      const year = Number(y)
      const month = Number(m)
      const day = Number(d)

      if (year > 1960 && year < 2100) {
        if (month > 0 && month < 13) {
          if (day > 0 && day < 32) {
            const testDate = new Date(year, month - 1, day)
            const testYear = testDate.getFullYear()
            const testMonth = testDate.getMonth() + 1
            const testDay = testDate.getDate()

            return testYear === year && testMonth === month && testDay === day
          }
        }
      }
    }

    return false
  },
  isWeekend: (date?: string) => {
    const newDate = new Date(date || '')

    return newDate.getDay() === 6 || newDate.getDay() === 0
  },
  weekday: (date?: string, returnStr = false) => {
    const newDate = new Date(date || '')
    const day = newDate.getDay() + 1
    const dayIndex = day === 7 ? 0 : day

    return returnStr ? days[dayIndex] : dayIndex
  },
  getDaysDifference: (date1: string, date2: string) => {
    const difference = new Date(date2).getTime() - new Date(date1).getTime()
    const totalDays = Math.ceil(difference / (1000 * 3600 * 24))

    return totalDays < 0 ? totalDays * -1 : totalDays
  },
  getTwoDigitsDay: (day: number) => {
    if (day <= 9) {
      return `0${day}`
    }

    return day
  },
  getTwoDigitsMonth: (month: number) => {
    if (month <= 9) {
      return `0${month}`
    }

    return month
  },
  getIsToday: (currentDate: any, currentDay: number) =>
    currentDay === new Date().getDate() &&
    currentDate.getMonth() === new Date().getMonth() &&
    currentDate.getFullYear() === new Date().getFullYear(),
  getExistingEvents: (events: any, initialDate: number) =>
    events.filter((event: any) => {
      const start = new Date(event.startDate).getTime()
      const end = new Date(event.endDate).getTime()
      const isInRange = initialDate >= start && initialDate <= end

      return isInRange
    }),
  months,
  days
}

export default dates
