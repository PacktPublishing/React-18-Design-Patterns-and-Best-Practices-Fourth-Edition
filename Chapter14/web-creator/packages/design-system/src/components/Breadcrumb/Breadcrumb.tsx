import { cx } from '@web-creator/utils'
import React, { FC, Fragment, ReactElement } from 'react'
import { LinkProps } from 'react-router-dom'

import Text from '../Text'
import { BASE_CLASS_NAME, CSS } from './Breadcrumb.styled'

type LabelBody = {
  title: string
  link?: string
}

type Props = {
  children?: ReactElement | string | ReactElement[]
  labels: Array<LabelBody>
  Link?: LinkProps | any
}

const BreadcrumbComponent: FC<Props> = (props) => {
  const { labels, Link } = props

  const classNames = cx.generate({
    ccn: BASE_CLASS_NAME,
    data: []
  })

  const items = labels.map((item, index) => {
    const isLast = labels.length - 1 === index

    return (
      <Fragment key={item.title}>
        {Link ? (
          <Link href={item.link}>
            <Text variant="subtitle2">{item.title}</Text>
          </Link>
        ) : (
          <a href={item.link}>
            <Text variant="subtitle2">{item.title}</Text>
          </a>
        )}
        {!isLast && (
          <CSS.BreadcrumbDivider>
            <Text variant="subtitle2">/</Text>
          </CSS.BreadcrumbDivider>
        )}
      </Fragment>
    )
  })

  return <CSS.Breadcrumb className={classNames}>{items}</CSS.Breadcrumb>
}

export default BreadcrumbComponent
