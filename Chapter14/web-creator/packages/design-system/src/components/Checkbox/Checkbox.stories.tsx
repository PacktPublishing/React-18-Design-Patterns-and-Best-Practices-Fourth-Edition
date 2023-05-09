import React from 'react'

import Checkbox from './index'

const stories = {
  component: 'Checkbox',
  props: [
    {
      name: 'children',
      type: 'Node',
      default: '',
      description: 'The content of the component'
    },
    {
      name: 'color',
      type: 'Color',
      default: 'primary',
      description: 'The color of the badge'
    }
  ],
  stories: [
    {
      name: 'Checkbox',
      description: 'Simple Checkbox',
      render: <Checkbox label="My Checkbox Option" />,
      prop: false,
      code: `
      <Checkbox color="primary" /> Foo
      `
    }
  ]
}

export default stories
