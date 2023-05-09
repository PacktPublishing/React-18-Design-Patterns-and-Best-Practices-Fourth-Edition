import { cx } from '@web-creator/utils'
import React, { FC, ReactElement } from 'react'

import { Color, Shape } from '../../types'
import { BASE_CLASS_NAME, CSS } from './Avatar.styled'

type Props = {
  children: ReactElement | string | ReactElement[]
  color?: Color
  shape?: Shape
}

const AvatarComponent: FC<Props> = ({
  children,
  color = Color.primary,
  shape = Shape.round,
  ...restProps
}) => {
  const classNames = cx.generate({
    ccn: BASE_CLASS_NAME,
    data: [color, shape]
  })

  return (
    <CSS.Avatar className={classNames} {...restProps}>
      {children}
    </CSS.Avatar>
  )
}

export default AvatarComponent
