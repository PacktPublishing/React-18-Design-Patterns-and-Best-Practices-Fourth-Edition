import React, { useState } from 'react'

import Button from '../Button'
import TextField from '../TextField'
import Dialog from './index'

const stories = {
  component: 'Dialog',
  props: [
    {
      name: 'children',
      type: 'Node',
      default: '',
      description: 'The content of the component'
    },
    {
      name: 'color',
      type: 'StatusColor',
      default: 'primary',
      description: 'The color of the Dialog'
    }
  ],
  stories: [
    {
      name: 'Dialog',
      description: 'Simple Dialog',
      render: () => {
        const [open, setOpen] = useState(false)

        const handleOpen = () => setOpen(true)
        const handleClose = () => setOpen(false)

        return (
          <>
            <Button onClick={handleOpen}>Open Dialog</Button>
            <Dialog open={open} handleClose={handleClose} title="Add Model">
              <TextField
                label="Name"
                helperText="Name that will be displayed in GraphCMS"
                fullWidth
              />
              <TextField
                label="Model ID"
                helperText="ID used for accessing this model through the API"
                fullWidth
              />
              <TextField
                label="Description"
                helperText="Displays a hint for content editors and API users"
                fullWidth
              />
            </Dialog>
          </>
        )
      },
      prop: false,
      code: `
      const [open, setOpen] = useState(false)

      const handleOpen = () => setOpen(true)
      const handleClose = () => setOpen(false)
      const actions = (
        <>
          <Button>Save</Button>
         </>
      )
      return (
        <>
          <Button onClick={handleOpen}>Open Dialog</Button>
           <Dialog open={open} handleClose={handleClose} title="Add Model" actions={actions}>
            <TextField
              label="Name"
              helperText="Name that will be displayed in GraphCMS"
              fullWidth
            />
            <TextField
              label="Model ID"
              helperText="ID used for accessing this model through the API"
              fullWidth
             />
            <TextField
              label="Description"
              helperText="Displays a hint for content editors and API users"
               fullWidth
             />
          </Dialog>
        </>
       )
     `
    }
  ]
}

export default stories
