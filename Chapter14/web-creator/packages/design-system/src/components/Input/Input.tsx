import { cx } from '@web-creator/utils'
import React, { ComponentPropsWithoutRef, FC, ReactElement, useState } from 'react'

import { Color } from '../../types'
import Icon from '../Icon'
import { BASE_CLASS_NAME, CSS } from './Input.styled'

export interface Props extends ComponentPropsWithoutRef<'input'> {
  fullWidth?: boolean
  leftIcon?: ReactElement
  rightIcon?: ReactElement
  status?: Color
  error?: boolean
}

const Input: FC<Props> = ({
  status = '',
  type = 'text',
  leftIcon,
  rightIcon,
  fullWidth = false,
  value = '',
  disabled = false,
  error = false,
  ...restProps
}) => {
  const [hasFocus, setHasFocus] = useState(false)
  const [showValue, setShowValue] = useState(false)

  const isPassword = type === 'password'
  const inputType = showValue ? 'text' : type
  const focusClass = hasFocus ? 'focus' : ''
  const fullWidthClass = fullWidth ? 'full-width' : ''

  const classNames = cx.generate({
    ccn: BASE_CLASS_NAME,
    data: [status, focusClass, fullWidthClass]
  })

  const handleShowPassword = () => {
    setShowValue((prev) => !prev)
  }

  const iconProps = {
    size: 20,
    color: 'red'
  }

  const eye = () => <Icon library="feather" type="eye" width={20} />
  const eyeOff = () => <Icon library="feather" type="eye-off" width={20} />

  const LeftIcon = leftIcon
  const RightIcon = (isPassword && (showValue ? eye : eyeOff)) || rightIcon

  return (
    <CSS.InputWrapper
      className={cx.join(classNames, disabled ? 'disabled' : '')}
      style={error ? { border: '1px solid red' } : {}}
    >
      {LeftIcon && (
        <CSS.InputIcon className="icon-left">
          {/* @ts-ignore */}
          <LeftIcon {...iconProps} />
        </CSS.InputIcon>
      )}
      <CSS.InputBase
        type={inputType}
        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(false)}
        value={value || ''}
        disabled={disabled}
        {...restProps}
      />
      {RightIcon &&
        (isPassword ? (
          <CSS.InputIcon className="icon-right pointer" as="button" onClick={handleShowPassword}>
            {/* @ts-ignore */}
            <RightIcon {...iconProps} />
          </CSS.InputIcon>
        ) : (
          <CSS.InputIcon className="icon-right">
            {/* @ts-ignore */}
            <RightIcon {...iconProps} />
          </CSS.InputIcon>
        ))}
    </CSS.InputWrapper>
  )
}

export default Input
