import styled from 'styled-components'

export namespace CSS {
  const listStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    padding: 0,
    width: '400px'
  }

  export const DayPickerInput = styled.div({
    '.label': {
      marginBottom: '10px',
      fontSize: '14px',
      marginLeft: '4px',
      fontWeight: 600
    }
  })

  export const DayPicker = styled.div({
    marginTop: '-20px',
    background: 'var(--dayPickerBackground)',
    position: 'absolute',
    zIndex: 9999,
    height: '436px',
    header: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '16px',
      justifyContent: 'space-between',
      paddingLeft: '20px',
      paddingRight: '20px',
      paddingTop: '-10px',
      marginBottom: '2em',
      color: 'var(--dayPickerHeaderColor)',
      minHeight: '10vh',
      textAlign: 'center',
      width: '350px'
    },
    ol: listStyle,
    ul: listStyle,
    li: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      listStyle: 'none',
      marginLeft: 0,
      fontSize: 'calc(16px + (21 - 16) * ((100vw - 300px) / (1600 - 300)))'
    },
    'ul.weekdays': {
      marginBottom: '1em',
      border: 'none',
      fontWeight: 600,
      textDecoration: 'none',
      fontSize: '13px'
    },
    'ul.weekdays li': {
      fontSize: '16px'
    },
    'ol.dayGrid li': {
      backgroundColor: 'var(--dayPickerDayGridBackground)',
      border: '1px solid var(--dayPickerDayGridBorder)',
      width: '98%',
      height: '50px',
      position: 'relative',
      '&:hover': {
        backgroundColor: 'var(--dayPickerDayGridBackgroundHover)',
        color: 'var(--dayPickerDayGridColorHover)',
        cursor: 'pointer'
      },
      '&.taken': {
        color: 'var(--dayPickerDayGridColorTaken)',
        background: 'var(--dayPickerDayGridBackgroundTaken)',
        cursor: 'default'
      },
      '.dayNumber': {
        fontSize: '14px',
        textAlign: 'center'
      },
      '.past': {
        background: 'var(--dayPickerDayGridBackgroundPast)'
      },
      '.same:not(:first-child) ': {
        color: 'transparent'
      },
      '.nextEvent': {
        background: 'var(--dayPickerDayGridBackgroundNextEvent)'
      }
    },
    'ol.dayGrid li.today': {
      background: 'var(--dayPickerDayGridBackgroundToday)'
    },
    'ol.dayGrid li.previousMonth .dayNumber': {
      color: 'var(--dayPickerDayGridColorPreviousMonth)'
    },
    'ol.dayGrid li.nextMonth .dayNumber': {
      color: 'var(--dayPickerDayGridColorNextMonth)'
    },
    'ol.dayGrid li.previousMonth, ol.dayGrid li.nextMonth .event': {
      opacity: '0.5'
    }
  })
}
