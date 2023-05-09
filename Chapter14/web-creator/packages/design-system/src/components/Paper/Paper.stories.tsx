import React from 'react'

import Paper from './index'

const stories = {
  component: 'Paper',
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
      name: 'Paper',
      description: 'Simple Paper',
      render: <Paper>Paper page</Paper>,
      prop: false,
      code: `
      <Paper>
        Paper page
      </Paper>
      `
    }
  ]
}

export default stories
