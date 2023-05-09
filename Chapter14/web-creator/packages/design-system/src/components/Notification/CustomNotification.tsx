import React, { FC, ReactNode } from 'react'
import { AppearanceTypes } from 'react-toast-notifications'

import SVG from '../Svg'
import { CSS } from './CustomNotification.styled'

type Props = {
  appearance: AppearanceTypes
  children: ReactNode
  onDismiss: (id?: string) => void
}

const CustomNotification: FC<Props> = ({ appearance, children, onDismiss }) => (
  <CSS.Notification className={`notification ${appearance}`}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <CSS.Icon onClick={() => onDismiss()}>
        <SVG.X />
      </CSS.Icon>

      {children}
    </div>
    <CSS.Close onClick={() => onDismiss()}>
      <SVG.X />
    </CSS.Close>
  </CSS.Notification>
)

export default CustomNotification
