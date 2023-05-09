import React, { FC } from 'react'

type Props = {
  type?: 'book' | 'open-book'
  stroke?: string
  fill?: string
  width?: number
  height?: number
  size?: number
  onClick?: any
}

const Book: FC<Props> = ({
  type = 'book',
  stroke = 'currentColor',
  fill = 'none',
  width = 24,
  height = 24,
  size = 24,
  onClick = null
}) => {
  let path1 = 'M4 19.5A2.5 2.5 0 0 1 6.5 17H20'
  let path2 = 'M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z'

  if (type === 'open-book') {
    path1 = 'M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z'
    path2 = 'M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z'
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
      <path d={path1} />
      <path d={path2} />
    </svg>
  )
}

export default Book
