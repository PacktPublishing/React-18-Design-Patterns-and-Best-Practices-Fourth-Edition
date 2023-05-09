import React from 'react'

import Button from './index'

const stories = {
  component: 'Button',
  props: [
    {
      name: 'children',
      type: 'Node',
      default: 'null',
      description: 'The content of the component'
    },
    {
      name: 'color',
      type: 'StatusColor',
      default: 'primary',
      description: 'The color of the button'
    },
    {
      name: 'href',
      type: 'reference',
      default: 'null',
      description: 'The reference of the button '
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: 'Disable the button '
    },
    {
      name: 'isLoading',
      type: 'boolean',
      default: 'false',
      description: 'Displays a loading animation along with loading text'
    },
    {
      name: 'loadingText',
      type: 'string',
      default: 'null',
      description: 'Text to be displayed with the loading animation'
    },
    {
      name: 'size',
      type: 'Size variants',
      default: 'medium',
      description: 'The size of the button'
    },
    {
      name: 'variant',
      type: 'variant',
      default: 'contained',
      description: 'The variant style of the button'
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
      name: 'Button (<button>)',
      description: 'A standard button',
      render: <Button>Button</Button>,
      prop: false,
      code: `
    <Button>
      Standard Button
    </Button>
    `
    },
    {
      name: 'Button (<a>)',
      description: 'A standard button',
      render: <Button href="#">Button</Button>,
      prop: false,
      code: `
    <Button href="#">
      Standard Button
    </Button>
    `
    },
    {
      name: 'Emphasis (<button>)',
      description: 'A button can be formatted to show different levels of emphasis',
      prop: false,
      render: (
        <>
          <Button color="primary">Save</Button>
          <Button>Cancel</Button>
        </>
      ),
      code: `
      <Button color="primary">Save</Button>
      <Button>Cancel</Button>
      `
    },
    {
      name: 'Emphasis (<a>)',
      description: 'A button can be formatted to show different levels of emphasis',
      prop: false,
      render: (
        <>
          <Button color="primary" href="#">
            Save
          </Button>
          <Button href="#">Cancel</Button>
        </>
      ),
      code: `
      <Button color="primary" href="#">Save</Button>
      <Button href="#">Cancel</Button>
      `
    },
    {
      name: 'Colors (<button>)',
      prop: 'color',
      description: 'primary, info, success, warning & danger',
      render: (
        <>
          <Button color="primary">Primary</Button>
          <Button color="secondary">Secondary</Button>
          <Button color="info">Info</Button>
          <Button color="success">Success</Button>
          <Button color="warning">Warning</Button>
          <Button color="danger">Danger</Button>
          <Button color="light">Light</Button>
          <Button color="dark">Dark</Button>
        </>
      ),
      code: `
      <Button color="primary">Primary</Button>
      <Button color="info">Info</Button>
      <Button color="success">Success</Button>
      <Button color="warning">Warning</Button>
      <Button color="danger">Danger</Button>
      `
    },
    {
      name: 'Colors (<a>)',
      prop: 'color',
      description: 'primary, info, success, warning & danger',
      render: (
        <>
          <Button color="primary" href="#">
            Primary
          </Button>
          <Button color="secondary" href="#">
            Secondary
          </Button>
          <Button color="info" href="#">
            Info
          </Button>
          <Button color="success" href="#">
            Success
          </Button>
          <Button color="warning" href="#">
            Warning
          </Button>
          <Button color="danger" href="#">
            Danger
          </Button>
          <Button color="light" href="#">
            Light
          </Button>
          <Button color="dark" href="#">
            Dark
          </Button>
        </>
      ),
      code: `
      <Button color="primary" href="#">Primary</Button>
      <Button color="info" href="#">Info</Button>
      <Button color="success" href="#">Success</Button>
      <Button color="warning" href="#">Warning</Button>
      <Button color="danger" href="#">Danger</Button>
      `
    },
    {
      name: 'Disabled (<button>)',
      prop: 'disabled',
      description: 'boolean',
      render: (
        <>
          <Button color="primary" disabled>
            Disabled
          </Button>
          <Button color="info" disabled>
            Info
          </Button>
          <Button color="success" disabled>
            Success
          </Button>
          <Button color="warning" disabled>
            Warning
          </Button>
          <Button color="danger" disabled>
            Danger
          </Button>
        </>
      ),
      code: `
      <Button color="primary" disabled>
        Disabled
      </Button>
      <Button color="info" disabled>
        Info
      </Button>
      <Button color="success" disabled>
        Success
      </Button>
      <Button color="warning" disabled>
        Warning
      </Button>
      <Button color="danger" disabled>
        Danger
      </Button>
      `
    },
    {
      name: 'Disabled (<a>)',
      prop: 'disabled',
      description: 'boolean',
      render: (
        <>
          <Button color="primary" disabled href="#">
            Disabled
          </Button>
          <Button color="info" disabled href="#">
            Info
          </Button>
          <Button color="success" disabled href="#">
            Success
          </Button>
          <Button color="warning" disabled href="#">
            Warning
          </Button>
          <Button color="danger" disabled href="#">
            Danger
          </Button>
        </>
      ),
      code: `
      <Button color="primary" href="#" disabled>
        Disabled
      </Button>
      <Button color="info" href="#" disabled>
        Info
      </Button>
      <Button color="success" href="#" disabled>
        Success
      </Button>
      <Button color="warning" href="#" disabled>
        Warning
      </Button>
      <Button color="danger" href="#" disabled>
        Danger
      </Button>
      `
    },
    {
      name: 'Variant Outlined (<button>)',
      prop: 'variant',
      description: 'outlined',
      render: (
        <>
          <Button color="primary" variant="outlined">
            Primary
          </Button>
          <Button color="info" variant="outlined">
            Info
          </Button>
          <Button color="success" variant="outlined">
            Success
          </Button>
          <Button color="warning" variant="outlined">
            Warning
          </Button>
          <Button color="danger" variant="outlined">
            Danger
          </Button>
        </>
      ),
      code: `
      <Button color="primary" variant="outlined">Primary</Button>
      <Button color="info" variant="outlined">Info</Button>
      <Button color="success" variant="outlined">Success</Button>
      <Button color="warning" variant="outlined">Warning</Button>
      <Button color="danger" variant="outlined">Danger</Button>
      `
    },
    {
      name: 'Variant Outlined (<a>)',
      prop: 'variant',
      description: 'outlined',
      render: (
        <>
          <Button color="primary" variant="outlined" href="#">
            Primary
          </Button>
          <Button color="info" variant="outlined" href="#">
            Info
          </Button>
          <Button color="success" variant="outlined" href="#">
            Success
          </Button>
          <Button color="warning" variant="outlined" href="#">
            Warning
          </Button>
          <Button color="danger" variant="outlined" href="#">
            Danger
          </Button>
        </>
      ),
      code: `
      <Button color="primary" variant="outlined" href="#">Primary</Button>
      <Button color="info" variant="outlined" href="#">Info</Button>
      <Button color="success" variant="outlined" href="#">Success</Button>
      <Button color="warning" variant="outlined" href="#">Warning</Button>
      <Button color="danger" variant="outlined" href="#">Danger</Button>
      `
    },
    {
      name: 'Sizes (<button>)',
      prop: 'size',
      description: 'small, medium, large & xLarge',
      render: (
        <>
          <p>
            <Button color="primary" size="small">
              Small Size
            </Button>
            <Button color="primary" size="medium">
              Regular Size
            </Button>
            <Button color="primary" size="large">
              Large Size
            </Button>
            <Button color="primary" size="xLarge">
              ExtraLarge Size
            </Button>
          </p>
          <br />
          <p>
            <Button color="primary" size="small" variant="outlined">
              Small Size
            </Button>
            <Button color="primary" size="medium" variant="outlined">
              Regular Size
            </Button>
            <Button color="primary" size="large" variant="outlined">
              Large Size
            </Button>
            <Button color="primary" size="xLarge" variant="outlined">
              ExtraLarge Size
            </Button>
          </p>
        </>
      ),
      code: `
      <Button color="primary" size="small">Small Size</Button>
      <Button color="primary" size="medium">Regular Size</Button>
      <Button color="primary" size="large">Large Size</Button>
      <Button color="primary" size="xLarge">ExtraLarge Size</Button>
      <Button color="primary" variant="outlined" size="small">Primary</Button>
      <Button color="primary" variant="outlined" size="medium">Primary</Button>
      <Button color="primary" variant="outlined" size="large">Primary</Button>
      <Button color="primary" variant="outlined" size="xLarge">Primary</Button>
      `
    },
    {
      name: 'Sizes (<a>)',
      prop: 'size',
      description: 'small, medium, large & xLarge',
      render: (
        <>
          <p>
            <Button color="primary" size="small" href="#">
              Small Size
            </Button>
            <Button color="primary" size="medium" href="#">
              Regular Size
            </Button>
            <Button color="primary" size="large" href="#">
              Large Size
            </Button>
            <Button color="primary" size="xLarge" href="#">
              ExtraLarge Size
            </Button>
          </p>
          <br />
          <br />
          <p>
            <Button color="primary" size="small" variant="outlined" href="#">
              Small Size
            </Button>
            <Button color="primary" size="medium" variant="outlined" href="#">
              Regular Size
            </Button>
            <Button color="primary" size="large" variant="outlined" href="#">
              Large Size
            </Button>
            <Button color="primary" size="xLarge" variant="outlined" href="#">
              ExtraLarge Size
            </Button>
          </p>
        </>
      ),
      code: `
      <Button color="primary" size="sm" href="#">Small Size</Button>
      <Button color="primary" size="md" href="#">Regular Size</Button>
      <Button color="primary" size="lg" href="#">Large Size</Button>
      <Button color="primary" size="xl" href="#">ExtraLarge Size</Button>
      <Button color="primary" variant="outlined" size="sm" href="#">Primary</Button>
      <Button color="primary" variant="outlined" size="md" href="#">Primary</Button>
      <Button color="primary" variant="outlined" size="lg" href="#">Primary</Button>
      <Button color="primary" variant="outlined" size="xl" href="#">Primary</Button>
      `
    },
    {
      name: 'Block (<button>)',
      prop: 'fullWidth',
      description: 'Full width',
      render: (
        <>
          <p>
            <Button color="primary" fullWidth>
              Block level button
            </Button>
          </p>
          <br />
          <p>
            <Button color="success" fullWidth>
              Block level button
            </Button>
          </p>
        </>
      ),
      code: `
      <Button color="primary" fullWidth>Block level button</Button>
      <Button color="secondary" fullWidth>Block level button</Button>
      `
    },
    {
      name: 'FullWidth (<a>)',
      prop: 'fullWidth',
      description: 'Full width',
      render: (
        <>
          <p>
            <Button color="primary" fullWidth href="#">
              Block level button
            </Button>
          </p>
          <br />
          <p>
            <Button color="success" fullWidth href="#">
              Block level button
            </Button>
          </p>
        </>
      ),
      code: `
      <Button color="primary" fullWidth>Block level button</Button>
      <Button color="secondary" fullWidth>Block level button</Button>
      `
    },
    {
      name: 'Button with Loading Text (<button>)',
      prop: 'isLoading',
      description: 'true',
      render: (
        <>
          <p>
            <Button color="primary" loadingText="Creating" isLoading>
              Create
            </Button>
            <Button color="info" loadingText="Creating" isLoading>
              Create
            </Button>
            <Button color="success" loadingText="Creating" isLoading>
              Create
            </Button>
            <Button color="warning" loadingText="Creating" isLoading>
              Create
            </Button>
            <Button color="danger" loadingText="Creating" isLoading>
              Create
            </Button>
          </p>
          <br />
          <p>
            <Button color="primary" loadingText="Creating">
              Create
            </Button>
            <Button color="info" loadingText="Creating">
              Create
            </Button>
            <Button color="success" loadingText="Creating">
              Create
            </Button>
            <Button color="warning" loadingText="Creating">
              Create
            </Button>
            <Button color="danger" loadingText="Creating">
              Create
            </Button>
          </p>
        </>
      ),
      code: `
      <Button color="primary" loadingText="Creating" isLoading>
        Create
      </Button>
      <Button color="info" loadingText="Creating" isLoading>
        Create
      </Button>
      <Button color="success" loadingText="Creating" isLoading>
        Create
      </Button>
      <Button color="warning" loadingText="Creating" isLoading>
        Create
      </Button>
      <Button color="danger" loadingText="Creating" isLoading>
        Create
      </Button>
      `
    },
    {
      name: 'Button with Loading Text (<a>)',
      prop: 'isLoading',
      description: 'true',
      render: (
        <>
          <p>
            <Button color="primary" href="#" loadingText="Creating" isLoading>
              Create
            </Button>
            <Button color="info" href="#" loadingText="Creating" isLoading>
              Create
            </Button>
            <Button color="success" href="#" loadingText="Creating" isLoading>
              Create
            </Button>
            <Button color="warning" href="#" loadingText="Creating" isLoading>
              Create
            </Button>
            <Button color="danger" href="#" loadingText="Creating" isLoading>
              Create
            </Button>
          </p>
          <br />
          <br />
          <p>
            <Button color="primary" href="#" loadingText="Creating">
              Create
            </Button>
            <Button color="info" href="#" loadingText="Creating">
              Create
            </Button>
            <Button color="success" href="#" loadingText="Creating">
              Create
            </Button>
            <Button color="warning" href="#" loadingText="Creating">
              Create
            </Button>
            <Button color="danger" href="#" loadingText="Creating">
              Create
            </Button>
          </p>
        </>
      ),
      code: `
      <Button color="primary" href="#" loadingText="Creating" isLoading>
        Create
      </Button>
      <Button color="info" href="#" loadingText="Creating" isLoading>
        Create
      </Button>
      <Button color="success" href="#" loadingText="Creating" isLoading>
        Create
      </Button>
      <Button color="warning" href="#" loadingText="Creating" isLoading>
        Create
      </Button>
      <Button color="danger" href="#" loadingText="Creating" isLoading>
        Create
      </Button>
      `
    }
  ]
}

export default stories
