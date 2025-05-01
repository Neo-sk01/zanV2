"use client"

import React from 'react'
import Image from 'next/image'

export function Logo() {
  return (
    <div className="flex items-center h-24">
      <div className="flex items-center justify-center">
        <Image 
          src="/media/images/ZAN (1).svg" 
          alt="ZAN Orthodontics Logo" 
          width={155} 
          height={78} 
          className="h-auto" 
          priority
        />
      </div>
    </div>
  )
}
