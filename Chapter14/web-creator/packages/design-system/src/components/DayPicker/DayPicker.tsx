import { cx, dates } from '@web-creator/utils'
import React, { FC, useEffect, useState } from 'react'

import Icon from '../Icon'
import Input from '../Input'
import { CSS } from './DayPicker.styled'

const date = new Date()

type Event = {
  startDate: string
  endDate: string
  title: string
  color?: string
}

type Props = {
  events: Event[]
  label?: string
  onClick?: any
  defaultValue?: string
  disabled?: boolean
  t?: any
  editing?: boolean
  splitter?: '-' | '/'
}

let translate = (text: string) => text

const DayPicker: FC<Props> = ({
  events,
  t,
  label,
  onClick,
  defaultValue,
  disabled,
  editing,
  splitter = '-'
}) => {
  date.setDate(1)

  if (t) {
    translate = t
  }

  const [isValidDate, setIsValidDate] = useState(false)
  const [showPicker, setShowPicker] = useState(false)
  const [targetDay, setTargetDay] = useState(defaultValue)
  const [value, setValue] = useState(targetDay)
  const [firstDayIndex, setFirstDayIndex] = useState(date.getDay())
  const [currentMonth, setCurrentMonth] = useState<any>(date.getMonth())
  const [currentYear, setCurrentYear] = useState(date.getFullYear())
  const [days, setDays] = useState<any>([])
  const [lastDay, setLastDay] = useState(
    new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  )
  const [previousLastDay, setPreviousLastDay] = useState(
    new Date(date.getFullYear(), date.getMonth(), 0).getDate()
  )
  const [lastDayIndex, setLastDayIndex] = useState(
    new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay()
  )
  const [nextDays, setNextDays] = useState(7 - lastDayIndex)

  const handleDayClick = (e: any) => {
    let target = null

    if (e.target.id) {
      target = e.target
    } else {
      target = e.target.parentElement
    }

    const selectedDate = target.id

    if (!target.classList.contains('taken')) {
      setTargetDay(selectedDate)
      setShowPicker(false)

      if (onClick) {
        onClick(selectedDate)
      }
    }
  }

  const renderEvents = ({
    day,
    isToday = false,
    isPreviousMonth = false,
    isNextMonth = false,
    currentDate,
    existingEvents
  }: {
    day: number
    isToday?: boolean
    isPreviousMonth?: boolean
    isNextMonth?: boolean
    currentDate: string
    existingEvents: Event[]
  }) => {
    const className = isNextMonth
      ? 'nextMonth'
      : isPreviousMonth
      ? 'previousMonth'
      : isToday
      ? 'today'
      : 'day'

    return (
      <li
        className={cx.join(className, !editing ? 'taken' : '', 'daypicker')}
        onClick={handleDayClick}
        id={currentDate}
        key={currentDate}
      >
        {existingEvents.map(() => (
          <span key={day} className="dayNumber daypicker">
            {day}
          </span>
        ))}
      </li>
    )
  }

  const renderDay = (className: string, currentDate: string, day: number) => (
    <li
      className={cx.join(className, 'daypicker')}
      onClick={handleDayClick}
      id={currentDate}
      key={currentDate}
    >
      <span className="dayNumber daypicker">{day}</span>
    </li>
  )

  const renderDays = () => {
    const daysArr = []

    // Previous month
    for (let h = firstDayIndex; h > 0; h -= 1) {
      const currentDay = previousLastDay - h + 1
      const month = currentMonth
      let fullYear = month === -1 ? currentYear - 1 : currentYear
      let twoDigitsMonth = dates.getTwoDigitsMonth(month === -1 ? 12 : month)
      const twoDigitsDay = dates.getTwoDigitsDay(currentDay)

      if (twoDigitsMonth === '00') {
        fullYear -= 1
        twoDigitsMonth = '12'
      }

      const currentDate: string = `${fullYear}${splitter}${twoDigitsMonth}${splitter}${twoDigitsDay}`
      const initialDate = new Date(currentDate).getTime()
      const existingEvents = dates.getExistingEvents(events, initialDate)

      if (existingEvents.length > 0) {
        daysArr.push(
          renderEvents({ day: currentDay, currentDate, isPreviousMonth: true, existingEvents })
        )
      } else {
        daysArr.push(renderDay('previousMonth', currentDate, currentDay))
      }
    }

    // Current month
    for (let i = 1; i <= lastDay; i += 1) {
      const isToday = dates.getIsToday(date, i)

      const currentDate: string = `${currentYear}${splitter}${dates.getTwoDigitsMonth(
        currentMonth + 1
      )}${splitter}${dates.getTwoDigitsDay(i)}`

      const initialDate = new Date(currentDate).getTime()
      const existingEvents = dates.getExistingEvents(events, initialDate)

      if (existingEvents.length > 0) {
        daysArr.push(renderEvents({ day: i, currentDate, isToday, existingEvents }))
      } else {
        daysArr.push(renderDay(isToday ? 'today' : 'day', currentDate, i))
      }
    }

    // Next month
    for (let j = 1; j < nextDays; j += 1) {
      const month = currentMonth + 2
      const currentDate: string = `${
        month === 13 ? currentYear + 1 : currentYear
      }${splitter}${dates.getTwoDigitsMonth(
        month === 13 ? 1 : month
      )}${splitter}${dates.getTwoDigitsDay(j)}`

      const initialDate = new Date(currentDate).getTime()
      const existingEvents = dates.getExistingEvents(events, initialDate)

      if (existingEvents.length > 0) {
        daysArr.push(renderEvents({ day: j, currentDate, isNextMonth: true, existingEvents }))
      } else {
        daysArr.push(renderDay('nextMonth', currentDate, j))
      }
    }

    setDays(daysArr)
  }

  const updateStates = ({ year, month, firstDay, last, prevLastDay, lastIndex }: any) => {
    setCurrentYear(year)
    setCurrentMonth(month)
    setFirstDayIndex(firstDay)
    setLastDay(last)
    setPreviousLastDay(prevLastDay)
    setNextDays(7 - lastIndex)
    setLastDayIndex(lastIndex)

    date.setDate(1)
    renderDays()
  }

  const handlePreviousMonth = () => {
    const prevMonth = date.getMonth() - 1
    const isPrevYear = prevMonth === -1
    const prevYear = isPrevYear ? date.getFullYear() - 1 : date.getFullYear()

    date.setMonth(isPrevYear ? 11 : prevMonth)
    date.setFullYear(prevYear)

    updateStates({
      year: prevYear,
      month: prevMonth === -1 ? 11 : prevMonth,
      firstDay: date.getDay(),
      last: new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(),
      prevLastDay: new Date(date.getFullYear(), date.getMonth(), 0).getDate(),
      lastIndex: new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay()
    })
  }

  const handleNextMonth = () => {
    const nextMonth = date.getMonth() + 1
    const isNextYear = nextMonth === 12
    const nextYear = isNextYear ? date.getFullYear() + 1 : date.getFullYear()

    date.setMonth(isNextYear ? 0 : nextMonth)
    date.setFullYear(nextYear)

    updateStates({
      year: nextYear,
      month: nextMonth === 12 ? 0 : nextMonth,
      firstDay: date.getDay(),
      last: new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(),
      prevLastDay: new Date(date.getFullYear(), date.getMonth(), 0).getDate(),
      lastIndex: new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay()
    })
  }

  const handlePicker = () => {
    if (onClick) {
      onClick(value)
    }

    setShowPicker(!showPicker)
  }

  const handleClickOutside = (e: any) => {
    const isDayPickerElement = e.target.classList.contains('daypicker')

    if (!isDayPickerElement) {
      setShowPicker(!showPicker)
    }
  }

  const handleChange = (e: any) => {
    const validDate = dates.isValidDate(e.target.value)

    setIsValidDate(validDate)

    setValue(e.target.value)

    if (validDate && onClick) {
      onClick(e.target.value)
    }
  }

  useEffect(() => {
    if (targetDay && onClick) {
      const validDate = dates.isValidDate(targetDay)

      setIsValidDate(validDate)
      setValue(targetDay)
    }

    renderDays()
  }, [currentMonth, targetDay])

  useEffect(() => {
    if (showPicker && typeof window !== 'undefined') {
      document.addEventListener('mousedown', handleClickOutside)
    } else if (typeof window !== 'undefined') {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      if (typeof window !== 'undefined') {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
  }, [showPicker])

  return (
    <>
      <CSS.DayPickerInput>
        {label && <p className="label">{label}</p>}
        <Input
          id="dayPicker"
          autoComplete="off"
          name="dayPicker"
          placeholder={translate('selectDate')}
          onClick={handlePicker}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          error={!isValidDate && !!value}
          className="daypicker"
        />
      </CSS.DayPickerInput>

      {showPicker && (
        <CSS.DayPicker className="daypicker">
          <header className="daypicker">
            <Icon type="fas fa-chevron-left" onClick={handlePreviousMonth} className="daypicker" />
            <div className="currentDate daypicker">
              <h2 className="daypicker">
                {translate(dates.months[currentMonth])} {currentYear}
              </h2>
            </div>
            <Icon type="fas fa-chevron-right" onClick={handleNextMonth} className="daypicker" />
          </header>

          <ul className="weekdays daypicker">
            {dates.days.map((day: string) => (
              <li key={day} title={translate(day)} className="daypicker">
                {day[0]}
              </li>
            ))}
          </ul>

          <ol className="dayGrid daypicker">{days}</ol>
        </CSS.DayPicker>
      )}
    </>
  )
}

export default DayPicker
