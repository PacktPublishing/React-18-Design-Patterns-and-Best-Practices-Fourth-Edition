import { cx } from '@web-creator/utils'
import React, { ComponentPropsWithoutRef, FC } from 'react'

import { Color, Shape } from '../../types'
import { BASE_CLASS_NAME, CSS } from './Radio.styled'

interface Props extends ComponentPropsWithoutRef<'input'> {
  color?: Color
  checked?: boolean
  label?: string
  name?: string
  onClick?(): void
  value?: string
  shape?: Shape
}

const RadioComponent: FC<Props> = ({
  label,
  checked,
  color = Color.primary,
  shape = Shape.round,
  ...checkboxProps
}) => {
  const classNames = cx.generate({
    ccn: BASE_CLASS_NAME,
    data: [color, shape]
  })

  return (
    <CSS.RadioWrapper data-component="Checkbox">
      <CSS.RadioText>{label}</CSS.RadioText>
      <CSS.Radio {...checkboxProps} type="radio" checked={checked} />
      <CSS.RadioChild className={cx.join(classNames, 'checkmark')} />
    </CSS.RadioWrapper>
  )
}

export default RadioComponent
