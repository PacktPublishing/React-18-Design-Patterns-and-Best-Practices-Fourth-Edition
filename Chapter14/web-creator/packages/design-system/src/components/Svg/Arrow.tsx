import React, { FC } from 'react'

type Props = {
  direction?: 'left' | 'right' | 'up' | 'down'
  stroke?: string
  fill?: string
  width?: number
  height?: number
  size?: number
  onClick?: any
}

const Arrow: FC<Props> = ({
  direction = 'right',
  stroke = 'currentColor',
  fill = 'none',
  width = 24,
  height = 24,
  size = 24,
  onClick = null
}) => {
  let polylinePoints = '9 18 15 12 9 6'

  if (direction === 'left') {
    polylinePoints = '15 18 9 12 15 6'
  }

  if (direction === 'up') {
    polylinePoints = '18 15 12 9 6 15'
  }

  if (direction === 'down') {
    polylinePoints = '6 9 12 15 18 9'
  }

  return (
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
      <polyline points={polylinePoints} />
    </svg>
  )
}

export default Arrow
