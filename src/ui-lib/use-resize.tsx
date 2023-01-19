import { useLayoutEffect } from 'react'

function useResize(callback: () => void) {
  return useLayoutEffect(() => {
    window.addEventListener('resize', callback)
    callback()
    return () => window.removeEventListener('resize', callback)
  }, [callback])
}

export default useResize
