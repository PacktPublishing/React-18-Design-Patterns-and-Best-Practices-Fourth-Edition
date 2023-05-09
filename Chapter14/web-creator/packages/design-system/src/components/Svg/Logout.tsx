import React, { FC } from 'react'

type Props = {
  stroke?: string
  fill?: string
  width?: number
  height?: number
  size?: number
  onClick?: any
}

const Logout: FC<Props> = ({
  stroke = 'currentColor',
  fill = 'none',
  width = 24,
  height = 24,
  size = 24,
  onClick = null
}) => (
  <svg
    onClick={onClick}
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
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
)

export default Logout
