import styled, { CSSObject } from 'styled-components'

// Base Class Name
export const BASE_CLASS_NAME = 'table'

export const tableStyle: CSSObject = {
  border: '1px solid var(--tableBorderColor)'
}

export namespace CSS {
  export const TableLabel = styled.span({
    fontSize: '13px',
    color: 'var(--tableLabelColor)',
    strong: {
      color: 'var(--tableLabelStrongColor)'
    }
  })

  export const TableBase = styled.table({
    width: '100%',
    borderCollapse: 'collapse'
  })

  export const TableHeader = styled.thead({
    ...tableStyle
  })

  export const TableRow = styled.tr({
    ...tableStyle,
    '&:nth-child(even)': {
      backgroundColor: 'var(--tableEvenRowBackground)'
    },
    '&:nth-child(odd)': {
      backgroundColor: 'var(--tableOddRowBackground)'
    },
    '&.header': {
      backgroundColor: 'var(--tableHeaderBackground)',
      color: 'var(--tableHeaderColor)'
    }
  })

  export const TableHeaderCol = styled.th({
    textAlign: 'center',
    padding: '1rem'
  })

  export const TableBody = styled.tbody({
    fontSize: '15px',
    color: 'var(--tableBodyColor)',
    a: {
      color: 'var(--tableBodyLinkColor)',
      textDecoration: 'none',
      '&:hover': {
        color: 'var(--tableBodyLinkHoverColor)'
      }
    }
  })

  export const TableCol = styled.td({
    textAlign: 'center',
    padding: '1rem'
  })
}
