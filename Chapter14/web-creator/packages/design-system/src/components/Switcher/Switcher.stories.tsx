import React from 'react'

import Switch from './index'

const stories = {
  component: 'Switcher',
  props: [
    {
      name: 'label',
      type: 'string',
      default: ' ',
      description: 'The label that will display next to the component'
    },
    {
      name: 'checked',
      type: 'boolean',
      default: 'false',
      description: 'Enables the checked status of thw switcher'
    },
    {
      name: 'type',
      type: 'string',
      default: ' ',
      description: 'change the type of the component'
    },
    {
      name: 'readOnly',
      type: 'boolean',
      default: 'false',
      description: 'Makes the component read only '
    },
    {
      name: 'onChange',
      type: 'ChangeEvent<HTMLInputElement>',
      default: 'null',
      description: 'The function that will be called when the onChange event happens'
    },
    {
      name: 'onClick',
      type: 'MouseEvent<HTMLInputElement>',
      default: 'null',
      description: 'The function that will be called when a  MouseEvent happens'
    }
  ],
  stories: [
    {
      name: 'Switcher',
      description: 'Simple Switcher',
      render: <Switch />,
      prop: false,
      code: `
      <Switch />
      `
    },
    {
      name: 'Checked switcher',
      description: 'Switcher with checked status ',
      render: <Switch checked />,
      prop: 'checked',
      code: `
      <Switch checked />
      `
    },
    {
      name: 'Switcher with a label',
      description: 'Displays a label next to the switcher',
      render: <Switch label="Foo" />,
      prop: 'label',
      code: `
      <Switch label="Foo"/>,
      `
    },
    {
      name: 'Rounded Switcher',
      description: 'A switcher with  rounded form',
      render: <Switch type="round" />,
      prop: 'type',
      code: `
      <Switch type="round" />
      `
    }
  ]
}

export default stories
