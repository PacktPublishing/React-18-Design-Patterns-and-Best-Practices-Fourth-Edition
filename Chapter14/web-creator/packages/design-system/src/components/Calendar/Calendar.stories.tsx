import React from 'react'

import Calendar from './index'

const stories = {
  component: 'Calendar',
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
      name: 'Calendar',
      description: 'Calendar',
      render: (
        <Calendar
          dateClick={(args: any) => console.log('ARGS===', args)}
          splitter="/"
          events={[
            {
              startDate: '2021-12-31',
              endDate: '2022-01-03',
              title: 'Carlos Santana',
              color: 'blue'
            },
            {
              startDate: '2021-11-01',
              endDate: '2022-05-03',
              title: 'Carlos Santana',
              color: 'orange'
            },
            {
              startDate: '2022-06-03',
              endDate: '2022-06-03',
              title: 'Carlos Santana',
              color: 'red'
            },
            {
              startDate: '2022-06-04',
              endDate: '2022-06-04',
              title: 'Carlos Santana',
              color: 'red'
            },
            { startDate: '2022-06-05', endDate: '2022-06-05', title: 'Carlos Santana' },
            { startDate: '2022-06-11', endDate: '2022-06-11', title: 'Cristina Santana' },
            { startDate: '2022-06-12', endDate: '2022-07-02', title: 'Cristina Santana' }
          ]}
        />
      ),
      prop: false,
      code: `
      <Calendar />
      `
    }
  ]
}

export default stories
