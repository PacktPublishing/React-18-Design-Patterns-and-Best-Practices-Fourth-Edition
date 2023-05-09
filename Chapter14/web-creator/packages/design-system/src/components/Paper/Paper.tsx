import { cx } from '@web-creator/utils'
import React, { FC, ReactElement } from 'react'

import { BASE_CLASS_NAME, CSS } from './Paper.styled'

interface IProps {
  children: ReactElement | string | ReactElement[]
  className?: string
}

const Paper: FC<IProps> = ({ children, className }) => {
  const classNames = cx.generate({
    ccn: BASE_CLASS_NAME,
    data: [],
    className
  })

  return <CSS.PaperBase className={classNames}>{children}</CSS.PaperBase>
}

export default Paper
