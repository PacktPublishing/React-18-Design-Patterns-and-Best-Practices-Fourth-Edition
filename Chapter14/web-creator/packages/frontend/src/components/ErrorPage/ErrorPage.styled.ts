import styled from 'styled-components'

export namespace CSS {
  export const ErrorPage = styled.div({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100%',
    '.text404': {
      textAlign: 'center',
      fontSize: '150px',
      marginBottom: '10px'
    },
    '.text': {
      fontSize: '25px',
      padding: '10px',
      marginBottom: '15px'
    },
    '.textLink': {
      fontSize: '15px',
      marginLeft: '10px',
      marginBottom: '10px'
    },
    '.link': {
      color: 'DodgerBlue',
      textDecoration: 'none'
    }
  })
}
