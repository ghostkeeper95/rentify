'use client'

import { useEffect, useState } from 'react'

interface SnackbarProps {
  message: string
  onClose: () => void
  duration?: number
}

export default function Snackbar({ message, onClose, duration = 3000 }: SnackbarProps) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
      onClose()
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  if (!visible) return null

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white py-2 px-4 rounded shadow-lg z-50">
      {message}
    </div>
  )
}
