import styled from 'styled-components'

// Base Class Name
export const BASE_CLASS_NAME = 'pagination'

export namespace CSS {
  export const Ul = styled.ul({
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    margin: '500 auto',
    marginTop: '90px',
    marginBottom: '50px',
    width: '100%',
    '& > li > a > span.active': {
      color: 'var(--paginationActiveColor)',
      backgroundColor: 'var(--paginationActiveBackground)'
    },
    '& > li > a > span:hover': {
      color: 'var(--paginationHoverColor)',
      backgroundColor: 'var(--paginationHoverBackground)'
    }
  })

  export const Li = styled.li({
    margin: '5px',
    a: {
      color: 'var(--paginationLinkColor) !important',
      textDecoration: 'none'
    }
  })

  export const SpanLink = styled.span({
    padding: '15px 20px',
    borderRadius: '5px',
    i: {
      '*[dir="rtl"] &': {
        transform: 'rotateY(180deg)'
      }
    }
  })
}
