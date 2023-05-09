import React, { FC } from 'react'
import { useParams } from 'react-router-dom'

import Table from '../src/components/Table/index'
import { StyledBlock, StyledPre, StyledShowCode } from './App.styled'

type Props = {
  components: any
  handleShowCode: any
  showCode: number | boolean
}

const Content: FC<Props> = ({ components, handleShowCode, showCode }) => {
  const { currentComponent = 'button' } = useParams()

  const component = components[currentComponent]

  return (
    <>
      <h2>{component.component}</h2>
      <Table
        data={{
          columns: ['Name', 'Type', 'Default', 'Description'],
          rows: component.props.map((prop: any) => [
            prop.name,
            prop.type,
            prop.default,
            prop.description
          ])
        }}
      />

      {component.stories.map((props: any, i: number) => (
        <StyledBlock key={`block-${i}`}>
          <div className="block">
            <h3>{props.name}</h3>
            <p>
              {props.prop ? (
                <>
                  <span className="strong">{props.prop}</span>:
                </>
              ) : (
                ''
              )}{' '}
              {props.description}
            </p>

            <div className="render">
              {typeof props.render === 'function' ? props.render() : props.render}
            </div>

            <StyledPre className={showCode === i ? 'show' : ''}>
              <code className="language-jsx">{props.code}</code>
            </StyledPre>
          </div>
          <div>
            <StyledShowCode onClick={() => handleShowCode(i)} title="View Code">
              View Code
            </StyledShowCode>
          </div>
        </StyledBlock>
      ))}
    </>
  )
}

export default Content
