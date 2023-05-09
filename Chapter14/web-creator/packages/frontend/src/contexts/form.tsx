import React, { ChangeEvent, createContext, FC, ReactElement, useMemo } from 'react'

// Interfaces
interface IFormContext {
  change(e: ChangeEvent<HTMLInputElement>, setState: any): any
  setValue(name: string, value: string, setState: any): any
}

type Props = {
  children: ReactElement
}

export const FormContext = createContext<IFormContext>({
  change: () => null,
  setValue: () => null
})

const FormProvider: FC<Props> = ({ children }) => {
  function change(e: ChangeEvent<HTMLInputElement>, setState: any) {
    const {
      target: { name, value }
    } = e

    if (name) {
      setState((prevState: any) => ({
        ...prevState,
        [name]: value
      }))
    }
  }

  function setValue(name: string, value: string, setState: any): void {
    setState((prevState: any) => ({
      ...prevState,
      [name]: value
    }))
  }

  const context = useMemo(
    () => ({
      change,
      setValue
    }),
    [change]
  )

  return <FormContext.Provider value={context}>{children}</FormContext.Provider>
}

export default FormProvider
