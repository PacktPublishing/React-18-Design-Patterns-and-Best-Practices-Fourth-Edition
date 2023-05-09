import { cx } from '@web-creator/utils'
import React, { ComponentPropsWithoutRef, FC, useState } from 'react'

import { BASE_CLASS_NAME, CSS } from './TextArea.styled'

export interface Props extends ComponentPropsWithoutRef<'textarea'> {
  fullWidth?: boolean
}

const TextAreaComponent: FC<Props> = (props) => {
  const { fullWidth = false, ...restProps } = props

  const [hasFocus, setHasFocus] = useState(false)

  const focusClass = hasFocus ? 'focus' : ''
  const fullWidthClass = fullWidth ? 'full-width' : ''

  const classNames = cx.generate({
    ccn: BASE_CLASS_NAME,
    data: [focusClass, fullWidthClass]
  })

  return (
    <CSS.TextAreaWrapper className={classNames}>
      <CSS.TextArea
        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(false)}
        {...restProps}
      />
    </CSS.TextAreaWrapper>
  )
}

export default TextAreaComponent
