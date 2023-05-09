import { useRef, useEffect } from 'react'

function usePrevious(value: any) {
  const ref = useRef()

  useEffect(() => {
    ref.current = value
  })

  return ref.current
}

export default usePrevious
