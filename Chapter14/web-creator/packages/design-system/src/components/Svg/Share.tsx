import React, { FC } from 'react'

type Props = {
  stroke?: string
  fill?: string
  width?: number
  height?: number
  size?: number
  onClick?: any
}

const Share: FC<Props> = ({
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
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
)

export default Share
