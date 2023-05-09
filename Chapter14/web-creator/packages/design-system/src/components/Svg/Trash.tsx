import React, { FC } from 'react'

type Props = {
  stroke?: string
  fill?: string
  width?: number
  height?: number
  size?: number
  onClick?: any
}

const Trash: FC<Props> = ({
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
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <line x1="10" y1="11" x2="10" y2="17" />
    <line x1="14" y1="11" x2="14" y2="17" />
  </svg>
)

export default Trash
