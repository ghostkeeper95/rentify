'use client'

import { useEffect, useState } from 'react'

import dynamic from 'next/dynamic'

import loadingAnimation from '@/assets/lottie/loading.json'

const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center w-full h-full">
      <div className="spinner-border w-12 h-12 border-4 rounded-full border-pink-500 border-t-transparent animate-spin"></div>
    </div>
  ),
})

interface OverlayLoaderProps {
  isLoading: boolean
  delay?: number
}

export default function OverlayLoader({ isLoading, delay = 100 }: OverlayLoaderProps) {
  const [showLoader, setShowLoader] = useState(false)

  useEffect(() => {
    let timer: NodeJS.Timeout

    if (isLoading) {
      timer = setTimeout(() => setShowLoader(true), delay)
    } else {
      setShowLoader(false)
    }

    return () => clearTimeout(timer)
  }, [isLoading, delay])

  if (!showLoader) return null

  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-60 flex items-center justify-center z-50">
      <div className="w-64 h-64">
        <Lottie animationData={loadingAnimation} loop={true} />
      </div>
    </div>
  )
}
