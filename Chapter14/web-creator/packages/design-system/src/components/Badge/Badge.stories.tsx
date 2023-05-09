import React from 'react'

import Badge from './index'

const stories = {
  component: 'Badge',
  props: [
    {
      name: 'children',
      type: 'Node',
      default: '',
      description: 'The content of the component'
    },
    {
      name: 'color',
      type: 'StatusColor',
      default: 'primary',
      description: 'The color of the badge'
    }
  ],
  stories: [
    {
      name: 'Badge',
      description: 'Simple Badge',
      render: <Badge shape="round">Foo</Badge>,
      prop: false,
      code: `
      <Badge />
      `
    },
    {
      name: 'Badge with color',
      description: 'Badge with a color status',
      render: (
        <>
          <Badge color="primary">Primary</Badge> <Badge color="secondary">Secondary</Badge>{' '}
          <Badge color="info">Info</Badge> <Badge color="success">Success</Badge>{' '}
          <Badge color="danger">Danger</Badge> <Badge color="warning">Warning</Badge>{' '}
          <Badge color="light">Light</Badge> <Badge color="dark">Dark</Badge>
        </>
      ),
      prop: 'color',
      code: `
      <Badge color="primary">Foo</Badge>
      <Badge color="info">Foo</Badge>
      <Badge color="success">Foo</Badge>
      <Badge color="danger">Foo</Badge>
      <Badge color="warning">Foo</Badge>
      `
    }
  ]
}

export default stories
