import styled from 'styled-components'

// Base Class Name
export const BASE_CLASS_NAME = 'breadcrumb'

export namespace CSS {
  export const Breadcrumb = styled.div({
    display: 'flex',
    '& > a': {
      textDecoration: 'none'
    }
  })

  export const BreadcrumbDivider = styled.div({
    margin: '0 0.5rem'
  })
}
