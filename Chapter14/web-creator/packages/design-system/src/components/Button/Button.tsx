import { cx } from '@web-creator/utils'
import React, { ComponentPropsWithoutRef, FC, ReactNode } from 'react'

import { ButtonVariant, Color, Shape, Size, Variant } from '../../types'
import { BASE_CLASS_NAME, CSS } from './Button.styled'

interface Props extends ComponentPropsWithoutRef<'button'> {
  color?: Color
  fullWidth?: boolean
  size?: Size
  variant?: ButtonVariant
  href?: string
  target?: string
  shape?: Shape
  disabled?: boolean
  isLoading?: boolean
  loadingText?: string
}

const ButtonComponent: FC<Props> = ({
  color = Color.primary,
  children,
  href = undefined,
  target = undefined,
  disabled = undefined,
  isLoading = undefined,
  loadingText = undefined,
  shape = Shape.regular,
  size = Size.medium,
  variant = Variant.contained,
  fullWidth = false,
  ...btnProps
}) => {
  let buttonText: ReactNode[] | ReactNode | string = children
  const fullWidthClass = fullWidth ? 'full-width' : ''
  const classes = [variant, size, shape, fullWidthClass]

  if (isLoading || disabled) {
    classes.push('disabled')
  }

  const classNames = cx.generate({
    ccn: BASE_CLASS_NAME,
    data: classes
  })

  if (isLoading) {
    buttonText = <span className="loading">{loadingText}...</span>
  }

  if (href) {
    const linkBtnProps: any = {
      href,
      target
    }

    return (
      <CSS.LinkButton
        data-component="LinkButton"
        className={cx.join(classNames, color)}
        {...linkBtnProps}
        disabled={isLoading || disabled}
      >
        <a {...linkBtnProps}>{buttonText}</a>
      </CSS.LinkButton>
    )
  }

  return (
    <CSS.Button
      data-component="Button"
      className={cx.join(classNames, color)}
      {...btnProps}
      disabled={isLoading || disabled}
    >
      {buttonText}
    </CSS.Button>
  )
}

export default ButtonComponent
