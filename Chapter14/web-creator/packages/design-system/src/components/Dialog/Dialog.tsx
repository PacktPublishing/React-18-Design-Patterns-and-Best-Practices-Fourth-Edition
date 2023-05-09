import React, { FC, ReactElement } from 'react'
import { createPortal } from 'react-dom'

import SVG from '../Svg'
import { CSS, GlobalStyle } from './Dialog.styled'

type Props = {
  open: boolean
  onOpen?(): void
  handleClose?(): void
  title?: string
  children: ReactElement | ReactElement[]
  options?: {
    position?: 'top' | 'center'
    height?: string
    width?: string
  }
}

const DialogComponent: FC<Props> = ({
  children,
  open,
  onOpen,
  handleClose,
  title,
  options = {}
}) => {
  const width = options.width || '500px'
  const height = options.height || ''
  const position = options.position || 'center'

  if (!open) {
    return null
  }

  if (onOpen) {
    onOpen()
  }

  return createPortal(
    <>
      <GlobalStyle />

      <CSS.Dialog className="Modal">
        <CSS.Container position={position} maxWidth={width} height={height}>
          <CSS.Close onClick={handleClose}>
            <SVG.X fill="var(--dialogCloseColor)" />
          </CSS.Close>

          <CSS.Content style={{ maxHeight: height !== '100%' ? height : '500px' }}>
            {title && <h2 className="label">{title}</h2>}
            {children}
          </CSS.Content>
        </CSS.Container>
      </CSS.Dialog>
    </>,
    document.body
  )
}

export default DialogComponent
