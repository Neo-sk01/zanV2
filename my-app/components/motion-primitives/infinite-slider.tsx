"use client"

import * as React from 'react'
import { useRef, useState, useEffect } from 'react'

interface InfiniteSliderProps {
  children: React.ReactNode
  speed?: number
  speedOnHover?: number
  direction?: 'left' | 'right'
  pauseOnHover?: boolean
  gap?: number
  className?: string
}

export function InfiniteSlider({
  children,
  speed = 30,
  speedOnHover = 0,
  direction = 'left',
  pauseOnHover = false,
  gap = 32,
  className = '',
}: InfiniteSliderProps) {
  const [hovering, setHovering] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!scrollerRef.current || !containerRef.current) return

    const scrollerContent = Array.from(scrollerRef.current.children)
    if (scrollerContent.length === 0) return

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true) as Node
      if (scrollerRef.current) {
        scrollerRef.current.appendChild(duplicatedItem)
      }
    })

    const currentSpeed = hovering && pauseOnHover ? 0 : hovering ? speedOnHover : speed

    const target = containerRef.current
    let animationFrameId: number | null = null
    let startTime: number | null = null
    let previousTimestamp: number | null = null
    let pixelsPerFrame = 0

    const animate = (timestamp: number) => {
      if (startTime === null) {
        startTime = timestamp
      }

      const elapsed = previousTimestamp === null ? 0 : timestamp - previousTimestamp
      previousTimestamp = timestamp

      // Calculate pixels to move per frame based on FPS and desired speed
      pixelsPerFrame = (currentSpeed * elapsed) / 1000

      if (target && scrollerRef.current) {
        if (direction === 'right') {
          target.scrollLeft += pixelsPerFrame
          if (target.scrollLeft >= scrollerRef.current.scrollWidth / 2) {
            target.scrollLeft = 0
          }
        } else {
          target.scrollLeft -= pixelsPerFrame
          if (target.scrollLeft <= 0) {
            target.scrollLeft = scrollerRef.current.scrollWidth / 2
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [speed, speedOnHover, direction, hovering, pauseOnHover])

  return (
    <div
      ref={containerRef}
      className={`scroller no-scrollbar flex w-full overflow-x-scroll ${className}`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}>
      <div
        ref={scrollerRef}
        className="scroller-inner flex"
        style={{
          gap: `${gap}px`,
          paddingLeft: `${gap}px`,
        }}>
        {children}
      </div>
    </div>
  )
}
