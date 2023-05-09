import React from 'react'

import Tags from './index'

const stories = {
  component: 'Tags',
  props: [
    {
      name: 'Tags',
      type: 'TagsArray',
      default: '[]',
      description: 'The tags of the component'
    },
    {
      name: 'Label',
      type: 'string',
      default: '',
      description: 'The label of the component'
    },
    {
      name: 'getTags',
      type: '(tags: Tag[]): void',
      default: '',
      description: 'The function that will get the tags'
    }
  ],
  stories: [
    {
      name: 'Tags',
      description: 'simple tags',
      // eslint-disable-next-line no-console
      render: (
        <Tags
          label="Agrega aqui"
          getTags={(tags) => console.log(tags)}
          tags={[{ option: 'opcion1', value: 'hola' }]}
        />
      ),
      prop: 'tags',
      code: `
      <Tags
        label="Agrega aqui"
        getTags={tags => console.log(tags)}
        tags={[{ option: 'opcion1', value: 'hola' }]}
      />
      `
    }
  ]
}

export default stories
