import { cx } from '@web-creator/utils'
import React, { FC, ReactElement } from 'react'

import { Alignment, Color, Shape } from '../../types'
import { BASE_CLASS_NAME, CSS } from './Alert.styled'

type Props = {
  children: string | ReactElement | ReactElement[]
  alignment?: Alignment
  color?: Color
  shape?: Shape
  fullWidth?: boolean
}

const AlertComponent: FC<Props> = ({
  alignment = Alignment.left,
  color = Color.primary,
  children,
  shape = Shape.regular,
  ...alertProps
}) => {
  const classes = [alignment, shape, color]

  const classNames = cx.generate({
    ccn: BASE_CLASS_NAME,
    data: classes
  })

  return (
    <CSS.Alert data-component="Alert" className={classNames} {...alertProps}>
      {children}
    </CSS.Alert>
  )
}

export default AlertComponent
