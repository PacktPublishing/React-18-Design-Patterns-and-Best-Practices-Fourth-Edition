import React, { ChangeEvent, FC } from 'react'

import { CSS } from './Switcher.styled'

interface IProps {
  label?: string
  checked?: boolean
  type?: string
  readOnly?: boolean
  onChange?(e: ChangeEvent<HTMLInputElement>): void
}

const SwitcherComponent: FC<IProps> = ({
  label = '',
  type,
  readOnly,
  onChange,
  checked = false
}) => (
  <CSS.Switcher data-component="Switcher">
    <CSS.Label>
      <CSS.Input type="checkbox" onChange={onChange} checked={checked} readOnly={readOnly} />
      {type === 'round' ? (
        <CSS.RoundSpan className="slider" />
      ) : (
        <CSS.SquareSpan className="slider" />
      )}
    </CSS.Label>
    &nbsp;
    <CSS.Text>{label}</CSS.Text>
  </CSS.Switcher>
)

export default SwitcherComponent
