import React from 'react'

type Props = {
  name?: string
}

function Hello({ name }: Props) {
  return <h1 className="Hello">Hello {name || 'World'}</h1>
}

Hello.defaultProps = {
  name: ''
}

export default Hello
