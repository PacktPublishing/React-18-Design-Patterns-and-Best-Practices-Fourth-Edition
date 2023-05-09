import React from 'react'

import Icon from '../Icon'
import Input from './index'

const icon = () => <Icon library="feather" type="search" width={20} />

const stories = {
  component: 'Input',
  props: [
    {
      name: 'status',
      type: 'StatusColor',
      default: 'none',
      description: 'The color of the input'
    },
    {
      name: 'type',
      type: 'Input types',
      default: 'text',
      description: 'The type of the input'
    },
    {
      name: 'leftIcon',
      type: 'React Element',
      default: 'Null',
      description: 'An icon that will be displayed on the left of the input'
    },
    {
      name: 'rightIcon',
      type: 'React Element',
      default: 'Null',
      description: 'An icon that will be displayed on the right of the input'
    },
    {
      name: 'fullWidth',
      type: 'boolean',
      default: 'false',
      description: 'Enables the full width of the button'
    }
  ],
  stories: [
    {
      name: 'Input',
      description: 'Text Input',
      // @ts-ignore
      render: <Input type="text" placeholder="Placeholder" leftIcon={icon} />,
      prop: false,
      code: `
      const icon = () => {
        return <Icon library="feather" type="search" width={20} />
      }

      <Input type="text" placeholder="Placeholder" leftIcon={icon} />
      `
    },
    {
      name: 'Password',
      description: 'Password Input',
      render: <Input type="password" />,
      prop: false,
      code: `
      <Input type="password" />
      `
    }
  ]
}

export default stories
