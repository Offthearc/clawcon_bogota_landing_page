import { useCallback, useRef, useState } from 'react'

export interface UseNavMenuReturn {
  isOpen: boolean
  toggle: () => void
  close: () => void
  buttonRef: React.RefObject<HTMLButtonElement | null>
}

export function useNavMenu(): UseNavMenuReturn {
  const [isOpen, setIsOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  const close = useCallback(() => {
    setIsOpen(false)
    buttonRef.current?.focus()
  }, [])

  return { isOpen, toggle, close, buttonRef }
}
