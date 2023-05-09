import React from 'react'

import Text from './index'

const stories = {
  component: 'Text',
  props: [
    {
      name: 'align',
      type: 'TextAlign',
      default: 'left',
      description: 'The alignament of the text'
    },
    {
      name: 'className',
      type: 'string',
      default: 'primary',
      description: 'The className of the text'
    },
    {
      name: 'color',
      type: 'TextColor',
      default: 'textPrimary',
      description: 'The color of the text'
    },
    {
      name: 'component',
      type: ' keyof JSX.IntrinsicElements',
      default: 'undefined',
      description: 'The component where the text will be displayed'
    },
    {
      name: 'status',
      type: 'StatusColor',
      default: ' ',
      description: 'The status color of the text'
    },
    {
      name: 'variant',
      type: 'Typography',
      default: 'paragraph1',
      description: 'The typography of the text'
    }
  ],
  stories: [
    {
      name: 'Text',
      description: 'left, center or right',
      render: <Text align="left">Left text</Text>,
      prop: 'align',
      code: `
      <Text align="left">My text</Text>
      `
    },
    {
      name: 'Text',
      description: 'left, center or right',
      render: <Text align="center">Centered text</Text>,
      prop: 'align',
      code: `
      <Text align="center">Centered text</Text>
      `
    },
    {
      name: 'Text',
      description: 'left, center or right',
      render: <Text align="right">Right text</Text>,
      prop: 'align',
      code: `
      <Text align="right">Centered text</Text>
      `
    }
  ]
}

export default stories
