import React, { FC } from 'react'

type Props = {
  stroke?: string
  fill?: string
  width?: number
  height?: number
  size?: number
  onClick?: any
}

const X: FC<Props> = ({
  stroke = 'currentColor',
  fill = 'none',
  width = 24,
  height = 24,
  size = 24,
  onClick = null
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || width}
    height={size || height}
    viewBox="0 0 24 24"
    fill={fill}
    stroke={stroke}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={onClick ? { cursor: 'pointer' } : {}}
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

export default X
