import React from 'react'

import Pagination from './index'

const stories = {
  component: 'Pagination',
  props: [
    {
      name: 'color',
      type: 'StatusColor',
      default: 'primary',
      description: 'The color of the badge'
    },
    {
      name: 'page',
      type: 'number',
      default: '1',
      description: 'The current page of the pagination'
    },
    {
      name: 'total',
      type: 'number',
      default: '1',
      description: 'The total of pages'
    },
    {
      name: 'rowsPerPage',
      type: 'number',
      default: '1',
      description: 'The number of items that will  be displayed per page'
    }
  ],
  stories: [
    {
      name: 'Pagination',
      description: 'Simple pagination',
      render: <Pagination page={3} total={200} rowsPerPage={10} href="/blog/" />,
      prop: false,
      code: `
      <Pagination
        page={3}
        total={200}
        rowsPerPage={10}
        href="/blog/"
      />
    `
    },
    {
      name: 'Pagination with color',
      description: 'Pagination with a color status',
      render: (
        <>
          <Pagination page={3} total={200} rowsPerPage={10} href="/blog/" color="secondary" />
          <Pagination page={3} total={200} rowsPerPage={10} href="/blog/" color="info" />
          <Pagination page={3} total={200} rowsPerPage={10} href="/blog/" color="success" />
          <Pagination page={3} total={200} rowsPerPage={10} href="/blog/" color="danger" />
          <Pagination page={3} total={200} rowsPerPage={10} href="/blog/" color="warning" />
        </>
      ),
      prop: 'color',
      code: `
      <Pagination
        page={3}
        total={200}
        rowsPerPage={10}
        href="/blog/"
        color="primary"
      />
      <Pagination
        page={3}
        total={200}
        rowsPerPage={10}
        href="/blog/"
        color="info"
      />
      <Pagination
        page={3}
        total={200}
        rowsPerPage={10}
        href="/blog/"
        color="success"
      />
      <Pagination
        page={3}
        total={200}
        rowsPerPage={10}
        href="/blog/"
        color="danger"
      />
      <Pagination
        page={3}
        total={200}
        rowsPerPage={10}
        href="/blog/"
        color="warning"
      />
      `
    }
  ]
}

export default stories
