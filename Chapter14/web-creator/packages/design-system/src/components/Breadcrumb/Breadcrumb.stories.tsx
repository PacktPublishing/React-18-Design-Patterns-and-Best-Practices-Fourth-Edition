import React from 'react'

import Breadcrumb from './index'

const stories = {
  component: 'Breadcrumb',
  props: [
    {
      name: 'Labels',
      type: 'Array<labelBody>',
      default: ' ',
      description: 'The text and the link of each label of the Breadcrumb'
    },
    {
      name: 'Link',
      type: 'any',
      default: ' ',
      description: 'The reference ot the Breadcrumb'
    }
  ],
  stories: [
    {
      name: 'Breadcrumb',
      description: 'Simple Breadcrumb',
      render: (
        <Breadcrumb
          labels={[
            { title: 'item1', link: '#item1' },
            { title: 'item2', link: '#item2' },
            { title: 'item3', link: '#item3' }
          ]}
        >
          Foo
        </Breadcrumb>
      ),
      prop: 'labels',
      code: `
      <Breadcrumb
        labels={[
          { title: 'item1', link: '#' },
          { title: 'item2', link: '#' },
          { title: 'item3', link: '#' }
        ]}
      >
      `
    }
  ]
}

export default stories
