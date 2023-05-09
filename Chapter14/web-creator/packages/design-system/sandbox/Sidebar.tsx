import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledMenu = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  background: #f5f5f5;

  li {
    width: 280px;
    h2 {
      text-align: center;
    }
    &:first-child {
      border: none;
    }
    &:first-letter {
      text-transform: capitalize;
    }
    a {
      color: #444;
      font-size: 14px;
      text-decoration: none;
      display: block;
      padding-top: 10px;
      padding-bottom: 10px;
      padding-left: 10px;
      height: 40px;
      line-height: 50px;
      width: 280px;
      &.active {
        background-color: #fff;
      }
      *[dir='rtl'] & {
        padding-right: 5px;
      }
      &:hover {
        background-color: #fff;
      }
    }
  }
`

type Props = {
  components: any
}

const Sidebar: FC<Props> = ({ components }) => (
  <StyledMenu>
    <li>
      <h2>Preview Components</h2>
    </li>
    {Object.keys(components).map((component: any) => {
      const url = `/${component.toLowerCase()}`

      return (
        <li key={component} className="item">
          <Link to={url} className={url === '' ? 'active' : ''}>
            {component}
          </Link>
        </li>
      )
    })}
  </StyledMenu>
)

export default Sidebar
