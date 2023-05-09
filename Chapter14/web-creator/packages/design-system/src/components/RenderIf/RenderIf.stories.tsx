import React from 'react'

import RenderIf from './index'

const stories = {
  component: 'RenderIf',
  props: [
    {
      name: 'children',
      type: 'ReactElement | string',
      default: 'Null',
      description: 'The content of the component'
    },
    {
      name: 'isTrue',
      type: 'boolean',
      default: 'false',
      description: 'Define if the component should be displayed or not'
    }
  ],
  stories: [
    {
      name: 'RenderIf',
      description: 'Render if true will show the conditional content',
      render: (
        <RenderIf isTrue>
          <h3>Condititional Content</h3>
        </RenderIf>
      ),
      prop: false,
      code: `
      <RenderIf isTrue>
        <h3>Condititional Content</h3>
      </RenderIf>
      `
    },
    {
      name: 'RenderIf',
      description: 'Render if false will hide the conditional content',
      render: (
        <RenderIf isTrue={false}>
          <h3>Condititional Content</h3>
        </RenderIf>
      ),
      prop: false,
      code: `
      <RenderIf isTrue={false}>
        <h3>Condititional Content</h3>
      </RenderIf>
      `
    }
  ]
}

export default stories
