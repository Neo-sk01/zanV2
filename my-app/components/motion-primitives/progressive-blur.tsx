"use client"

import * as React from 'react'

interface ProgressiveBlurProps {
  direction?: 'left' | 'right'
  blurIntensity?: number
  className?: string
}

export function ProgressiveBlur({
  direction = 'left',
  blurIntensity = 1,
  className = '',
}: ProgressiveBlurProps) {
  const gradientDirection = direction === 'left' ? 'to right' : 'to left'
  
  return (
    <div
      className={`progressive-blur ${className}`}
      style={{
        background: `linear-gradient(${gradientDirection}, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 100%)`,
        backdropFilter: `blur(${blurIntensity * 5}px)`,
        WebkitBackdropFilter: `blur(${blurIntensity * 5}px)`,
      }}
    />
  )
}
