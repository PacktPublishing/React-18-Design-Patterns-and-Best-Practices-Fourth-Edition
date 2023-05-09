import React, { FC } from 'react'

type Props = {
  name?: string
}

const Hello: FC<Props> = ({ name }) => <h1 className="Hello">Hello {name || 'World'}</h1>

export default Hello

if (import.meta.vitest) {
  const { cleanup, render } = require('@testing-library/react')

  describe('Hello Component', () => {
    it('should render Hello World', () => {
      const wrapper = render(<Hello />)
      expect(wrapper.getByText('Hello World')).toBeDefined()
    })

    it('should render the name prop', () => {
      const wrapper = render(<Hello name="Carlos" />)
      expect(wrapper.getByText('Hello Carlos')).toBeDefined()
    })
    it('should has .Home classname', () => {
      const wrapper = render(<Hello />)
      const firstChild = wrapper.container.firstChild as HTMLElement
      expect(firstChild?.classList.contains('Hello')).toBe(true)
    })

    afterAll(cleanup)
  })
}
