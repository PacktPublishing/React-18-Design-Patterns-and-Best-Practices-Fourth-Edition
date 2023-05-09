import { cx } from '@web-creator/utils'
import React, { FC, ReactElement, ReactNode } from 'react'

import { Color } from '../../types'
import Icon from '../Icon'
import { BASE_CLASS_NAME, CSS } from './Pagination.styled'

export type Props = {
  color?: Color
  page: number
  total: number
  rowsPerPage?: number
  href: string
  as?: string
  Link?: any
  NextLink?: any
}

const Pagination: FC<Props> = ({
  Link,
  NextLink,
  href,
  as,
  rowsPerPage,
  page,
  total: count,
  color = Color.primary
}) => {
  const classNames = cx.generate({
    ccn: BASE_CLASS_NAME,
    data: [color]
  })
  const maxElementsPerPage = rowsPerPage || 10
  const increment = 5

  const getCurrentPage = (start: number, end: number): number => (start === 0 ? 1 : start / end + 1)

  const getPageNav = (
    firstPage: number,
    lastPage: number,
    start: number,
    end: number
  ): ReactNode[] => {
    const pageNav: ReactElement[] = []

    for (let i = firstPage; i < lastPage; i += 1) {
      const pge = i + 1
      const next = i * end

      if (start === next) {
        if (Link) {
          pageNav.push(
            <CSS.Li key={i}>
              <Link to="#">
                <CSS.SpanLink className="active">{pge}</CSS.SpanLink>
              </Link>
            </CSS.Li>
          )
        } else if (NextLink) {
          pageNav.push(
            <CSS.Li key={i}>
              <NextLink as="#" href="#">
                <a>
                  <CSS.SpanLink className="active">{pge}</CSS.SpanLink>
                </a>
              </NextLink>
            </CSS.Li>
          )
        } else {
          pageNav.push(
            <CSS.Li key={i}>
              <a href="#">
                <CSS.SpanLink className="active">{pge}</CSS.SpanLink>
              </a>
            </CSS.Li>
          )
        }
      } else if (Link) {
        pageNav.push(
          <CSS.Li key={i}>
            <Link to={`${href}${pge}`}>
              <CSS.SpanLink>{pge}</CSS.SpanLink>
            </Link>
          </CSS.Li>
        )
      } else if (NextLink) {
        pageNav.push(
          <CSS.Li key={i}>
            <NextLink as={`${as}${pge}`} href={`${href}${pge}`}>
              <a>
                <CSS.SpanLink>{pge}</CSS.SpanLink>
              </a>
            </NextLink>
          </CSS.Li>
        )
      } else {
        pageNav.push(
          <CSS.Li key={i}>
            <a href={`${href}${pge}`}>
              <CSS.SpanLink>{pge}</CSS.SpanLink>
            </a>
          </CSS.Li>
        )
      }
    }

    return pageNav
  }

  const getPageNext = (currentPage: number, pages: number): ReactNode => {
    if (currentPage <= pages - 1) {
      if (Link) {
        return (
          <CSS.Li>
            <Link to={`${href}${currentPage + 1}`}>
              <CSS.SpanLink className="next">
                <Icon type="fas fa-chevron-right" />
              </CSS.SpanLink>
            </Link>
          </CSS.Li>
        )
      }

      if (NextLink) {
        return (
          <CSS.Li>
            <NextLink as={`${as}${currentPage + 1}`} href={`${href}${currentPage + 1}`}>
              <a>
                <CSS.SpanLink className="next">
                  <Icon type="fas fa-chevron-right" />
                </CSS.SpanLink>
              </a>
            </NextLink>
          </CSS.Li>
        )
      }

      return (
        <CSS.Li>
          <a href={`${href}${currentPage + 1}`}>
            <CSS.SpanLink className="next">
              <Icon type="fas fa-chevron-right" />
            </CSS.SpanLink>
          </a>
        </CSS.Li>
      )
    }

    return null
  }

  const getPagePrevious = (start: number, currentPage: number) => {
    if (start > 0) {
      if (Link) {
        return (
          <CSS.Li>
            <Link to={`${href}${currentPage - 1}`}>
              <CSS.SpanLink className="previous">
                <Icon type="fas fa-chevron-left" />
              </CSS.SpanLink>
            </Link>
          </CSS.Li>
        )
      }

      if (NextLink) {
        return (
          <CSS.Li>
            <NextLink as={`${as}${currentPage - 1}`} href={`${href}${currentPage - 1}`}>
              <a>
                <CSS.SpanLink className="previous">
                  <Icon type="fas fa-chevron-left" />
                </CSS.SpanLink>
              </a>
            </NextLink>
          </CSS.Li>
        )
      }

      return (
        <CSS.Li>
          <a href={`${href}${currentPage - 1}`}>
            <CSS.SpanLink className="previous">
              <Icon type="fas fa-chevron-left" />
            </CSS.SpanLink>
          </a>
        </CSS.Li>
      )
    }

    return null
  }

  const getPaginationStart = (pg: number): number => {
    const paginationPage = pg > 0 ? pg : 0
    return paginationPage > 0 ? paginationPage * maxElementsPerPage - maxElementsPerPage : 0
  }

  const buildPagination = (
    total: number,
    end: number,
    start: number,
    elementsPerPage?: number
  ): ReactElement => {
    const limit = elementsPerPage || maxElementsPerPage

    let currentPage: number
    let firstPage: number
    let lastPage: number
    let pageNav: ReactNode
    let pageNext: ReactNode
    let pagePrevious: ReactNode
    let pages: number
    let rest: number

    if (total > end) {
      rest = total % end
      pages = rest === 0 ? total / end : (total - rest) / end + 1
      currentPage = start / end + 1

      if (pages > limit) {
        if (start === 0) {
          firstPage = 0
          lastPage = limit
        }

        if (currentPage < increment) {
          firstPage = 0
          lastPage = currentPage + increment + (increment - currentPage)
        } else {
          firstPage = currentPage - increment - (currentPage + increment - pages)
          lastPage = pages
        }

        if (currentPage >= increment && currentPage <= pages - increment) {
          firstPage = currentPage - increment
          lastPage = currentPage + increment
        }
      } else {
        firstPage = 0
        lastPage = pages
      }

      pageNav = getPageNav(firstPage, lastPage, start, end)
      currentPage = getCurrentPage(start, end)
      pageNext = getPageNext(currentPage, pages)
      pagePrevious = getPagePrevious(start, currentPage)
    }

    return (
      <CSS.Ul className={classNames}>
        {pagePrevious}
        {pageNav}
        {pageNext}
      </CSS.Ul>
    )
  }

  const start = getPaginationStart(page)

  if (count > maxElementsPerPage) {
    return buildPagination(count, maxElementsPerPage, start)
  }

  return null
}

export default Pagination
