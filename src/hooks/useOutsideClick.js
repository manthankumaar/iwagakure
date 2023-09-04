import { useEffect, useRef } from 'react'

export const useOutsideClick = (handler, captueBubbling = true) => {
  const ref = useRef()
  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        handler()
      }
    }
    document.addEventListener('click', handleClick, captueBubbling)
    return () => {
      document.removeEventListener('click', handleClick, captueBubbling)
    }
  }, [handler, captueBubbling])
  return ref
}
