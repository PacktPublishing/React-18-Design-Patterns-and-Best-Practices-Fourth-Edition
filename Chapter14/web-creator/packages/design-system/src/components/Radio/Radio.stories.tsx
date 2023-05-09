import React from 'react'

import Radio from './index'

const stories = {
  component: 'Radio',
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
      name: 'Radio',
      description: 'Simple Radio',
      render: (
        <>
          <Radio name="radio" label="My Radio Option 1" />
          <Radio name="radio" label="My Radio Option 2" />
        </>
      ),
      prop: false,
      code: `
      <Radio name="radio" label="My Radio Option 1" />
      <Radio name="radio" label="My Radio Option 2" />
      `
    }
  ]
}

export default stories
