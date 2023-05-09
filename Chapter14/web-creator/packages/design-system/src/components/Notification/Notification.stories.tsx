import React from 'react'

import Notification from './index'

const stories = {
  component: 'Notification',
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
      name: 'Notification',
      description: 'Simple Notification',
      render: (
        <>
          <Notification
            notification={{ id: 1, message: 'Message testing 1' }}
            type="success"
            duration={1000}
            position="top-center"
          />
          <Notification
            notification={{ id: 1, message: 'Message testing 2' }}
            type="error"
            duration={2000}
            position="bottom-right"
          />
          <Notification
            notification={{ id: 1, message: 'Message testing 3' }}
            type="info"
            duration={3000}
            position="bottom-left"
          />
          <Notification
            notification={{ id: 1, message: 'Message testing 4' }}
            type="warning"
            duration={4000}
            position="bottom-center"
          />
          <Notification
            notification={{ id: 1, message: 'Message testing 5' }}
            type="warning"
            duration={5000}
            position="top-left"
          />
          <Notification
            notification={{ id: 1, message: 'Message testing 6' }}
            type="warning"
            duration={6000}
            position="top-right"
          />
        </>
      ),
      prop: false,
      code: `
      <Checkbox color="primary" /> Foo
      `
    }
  ]
}

export default stories
