import React from 'react'

import Table from './index'

const stories = {
  component: 'Table',
  props: [
    {
      name: 'data',
      type: 'Array',
      default: '',
      description: 'The content of the component'
    }
  ],
  stories: [
    {
      name: 'Table',
      description: 'Simple Table',
      render: (
        <Table
          data={{
            columns: ['#', 'Nombre', 'Precio'],
            rows: [
              ['1', 'Galaxy Z Fold2', '$1449'],
              ['2', 'Galaxy Z Flip', '$1099'],
              ['3', 'Galaxy Z Fold', '$1980']
            ]
          }}
        />
      ),
      prop: false,
      code: `
        <Table data={{
          columns: ['#', 'Nombre', 'Precio'],
          rows: [
            ['1', 'Galaxy Z Fold2', '$1449'],
            ['2', 'Galaxy Z Flip', '$1099'],
            ['3', 'Galaxy Z Fold', '$1980'],
          ]
        }} />
      `
    }
  ]
}

export default stories
