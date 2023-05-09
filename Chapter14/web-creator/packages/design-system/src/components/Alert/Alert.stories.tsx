import React from 'react'

import Alert from './index'

const stories = {
  component: 'Alert',
  props: [
    {
      name: 'children',
      type: 'Node',
      default: 'null',
      description: 'The content of the component'
    },
    {
      name: 'color',
      type: 'Color',
      default: 'primary',
      description: 'The color of the button'
    },
    {
      name: 'fullWidth',
      type: 'boolean',
      default: 'false',
      description: 'Enables the full width of the alert'
    }
  ],
  stories: [
    {
      name: 'Alert',
      description: 'Alert colors',
      render: (
        <>
          <Alert fullWidth>
            <>
              This is a <strong>primary</strong> alert with <a href="#">link</a>
            </>
          </Alert>
          <Alert color="secondary">
            <>
              This is a <strong>primary</strong> alert with <a href="#">link</a>
            </>
          </Alert>
          <Alert color="info">
            <>
              This is a <strong>primary</strong> alert with <a href="#">link</a>
            </>
          </Alert>
          <Alert color="success">
            <>
              This is a <strong>primary</strong> alert with <a href="#">link</a>
            </>
          </Alert>
          <Alert color="warning">
            <>
              This is a <strong>primary</strong> alert with <a href="#">link</a>
            </>
          </Alert>
          <Alert color="danger">
            <>
              This is a <strong>primary</strong> alert with <a href="#">link</a>
            </>
          </Alert>
          <Alert color="light">
            <>
              This is a <strong>primary</strong> alert with <a href="#">link</a>
            </>
          </Alert>
          <Alert color="dark">
            <>
              This is a <strong>primary</strong> alert with <a href="#">link</a>
            </>
          </Alert>
        </>
      ),
      prop: false,
      code: `
      <Alert>This is a primary alert</Alert>
      `
    },
    {
      name: 'Alert',
      description: 'A primary alert centered',
      render: <Alert alignment="center">This is a primary alert</Alert>,
      prop: false,
      code: `
      <Alert>This is a primary alert</Alert>
      `
    },
    {
      name: 'Alert',
      description: 'A primary alert align to right',
      render: <Alert alignment="right">This is a primary alert</Alert>,
      prop: false,
      code: `
      <Alert>This is a primary alert</Alert>
      `
    }
  ]
}

export default stories
