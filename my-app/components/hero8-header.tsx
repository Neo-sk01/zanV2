"use client"

import * as React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'

export function HeroHeader() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        // Hide navbar when scrolling down, show when scrolling up
        if (window.scrollY > lastScrollY && window.scrollY > 150) {
          // Scrolling down & past threshold
          setIsVisible(false);
        } else {
          // Scrolling up or at top
          setIsVisible(true);
        }
        // Update scroll position
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      
      // Cleanup
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <header 
      className={`sticky top-0 z-40 w-full bg-white shadow-sm transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="mx-auto flex h-[136px] w-full max-w-6xl items-center justify-between px-6">
        <div>
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <nav className="hidden gap-6 md:flex">
          <Link className="text-lg font-medium text-[#104c66] hover:text-[#74B4D0] transition-colors" href="/">
            Home
          </Link>
          <Link className="text-lg font-medium text-[#104c66] hover:text-[#74B4D0] transition-colors" href="#services">
            Services
          </Link>
          <Link className="text-lg font-medium text-[#104c66] hover:text-[#74B4D0] transition-colors" href="#about">
            About
          </Link>
          <Link className="text-lg font-medium text-[#104c66] hover:text-[#74B4D0] transition-colors" href="#contact">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild variant="outline" size="sm" className="hidden md:inline-flex text-sm">
            <Link href="#contact">Book Appointment</Link>
          </Button>
          <Button asChild size="sm" className="hidden md:inline-flex text-sm">
            <Link href="#contact">Emergency Care</Link>
          </Button>
          <Button variant="outline" size="icon" className="h-10 w-10 md:hidden">
            <MenuIcon className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
    </header>
  )
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}
