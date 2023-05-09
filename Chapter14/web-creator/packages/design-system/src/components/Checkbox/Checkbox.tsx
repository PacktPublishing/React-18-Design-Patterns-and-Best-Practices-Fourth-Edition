import { cx } from '@web-creator/utils'
import React, { ComponentPropsWithoutRef, FC, MouseEvent } from 'react'

import { Color, Shape } from '../../types'
import { BASE_CLASS_NAME, CSS } from './Checkbox.styled'

interface Props extends ComponentPropsWithoutRef<'input'> {
  color?: Color
  checked?: boolean
  label?: string
  name?: string
  onClick?: (e: MouseEvent<HTMLElement>) => void
  value?: string
  shape?: Shape
}

const CheckboxComponent: FC<Props> = ({
  label,
  checked,
  color = Color.primary,
  shape = Shape.regular,
  ...checkboxProps
}) => {
  const classNames = cx.generate({
    ccn: BASE_CLASS_NAME,
    data: [color, shape]
  })

  return (
    <CSS.CheckboxWrapper data-component="Checkbox">
      <CSS.CheckboxText>{label}</CSS.CheckboxText>
      <CSS.Checkbox {...checkboxProps} type="checkbox" checked={checked} />
      <CSS.CheckboxChild className={cx.join(classNames, 'checkmark')} />
    </CSS.CheckboxWrapper>
  )
}

export default CheckboxComponent
