import { cx } from '@web-creator/utils'
import React, { FC, useState } from 'react'

import Input from '../Input'
import Text from '../Text'
import TextArea from '../TextArea'
import { BASE_CLASS_NAME, CSS } from './TextField.styled'

interface ITextFieldBaseProps {
  label?: string
  helperText?: string
  error?: boolean
  fullWidth?: boolean
  textArea?: boolean
  minLength?: number
  maxLength?: number
  placeholder?: string
  type?: string
  value?: string
}

// interface TextFieldInputProps extends ITextFieldBaseProps, InputProps {}
// interface TextFieldAreaProps extends ITextFieldBaseProps, ITextAreaProps {}

type ILength = {
  min?: number | undefined
  max?: number | undefined
}

interface IValidateLength {
  length: ILength
  value: string | number | undefined
}

const ValidateLength = ({ length, value }: IValidateLength): string | null => {
  const { min, max } = length

  if (min) {
    if (value !== '' && String(value).length < min) {
      return `Min length ${min} characters`
    }
  }

  if (max) {
    if (value !== '' && String(value).length > max) {
      return `Max length ${max} characters`
    }
  }

  return null
}

const TextField: FC<ITextFieldBaseProps> = (props) => {
  const {
    label,
    helperText,
    fullWidth = false,
    textArea = false,
    type = 'text',
    minLength = undefined,
    maxLength = undefined,
    value = '',
    ...restProps
  } = props

  const isInput = !textArea && type
  const fullWidthClass = fullWidth ? 'full-width' : ''
  const helperTextClass = helperText ? 'helper-text' : ''
  const [inputValue, setInputValue] = useState(value)
  const formatValue = String(inputValue)
  const errorMsg = ValidateLength({
    length: {
      min: minLength,
      max: maxLength
    },
    value: formatValue
  })

  const classNames = cx.generate({
    ccn: BASE_CLASS_NAME,
    data: [fullWidthClass, helperTextClass]
  })

  return (
    <CSS.TextFieldBase className={classNames}>
      {label && <Text variant="label">{label}</Text>}

      {isInput ? (
        <Input
          fullWidth={fullWidth}
          type={type}
          onChange={(e) => setInputValue(e.target.value)}
          {...restProps}
        />
      ) : (
        <TextArea fullWidth={fullWidth} {...restProps} />
      )}

      {(maxLength || errorMsg || helperText) && (
        <CSS.TextFieldHelpersWrapper>
          <Text variant="caption1">
            <>{errorMsg || helperText}</>
          </Text>
          {maxLength && (
            <Text variant="caption1">
              <>{maxLength && `${formatValue.length}/${maxLength}`}</>
            </Text>
          )}
        </CSS.TextFieldHelpersWrapper>
      )}
    </CSS.TextFieldBase>
  )
}

export default TextField
