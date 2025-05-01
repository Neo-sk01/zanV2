"use client"

import * as React from 'react'
import { Card, CardContent } from '@/components/ui/card'

export default function MissionVision() {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-[#e8f4f0] to-[#f0f8fa] relative overflow-hidden" id="about-us">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <h5 className="inline-block px-5 py-1 bg-[#104c66]/10 rounded-full text-[#104c66] text-sm font-medium mb-3">ABOUT OUR PRACTICE</h5>
          <h2 className="text-3xl md:text-4xl font-bold text-[#104c66]">Our Mission & Vision</h2>
          <div className="w-20 h-1 bg-[#74B4D0] mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Mission Statement Card */}
          <Card className="border-none shadow-md overflow-hidden bg-white rounded-2xl transform transition-transform hover:-translate-y-1 hover:shadow-lg">
            <CardContent className="p-6">
              <div className="flex flex-col h-full">
                <div className="mb-4 text-[#104c66]">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-10 w-10"
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#104c66] mb-3">Our Mission</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  To provide <span className="font-semibold text-[#104c66]">exceptional orthodontic care</span> that enhances the health, function, and aesthetics of
                  every patient's smile, using <span className="font-semibold text-[#104c66]">state-of-the-art technology</span> and offering personalized, patient-
                  focused treatment in a welcoming environment.
                </p>
                <div className="mt-auto pt-4 border-t border-[#e8f4f0]">
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block px-3 py-1 bg-[#c0e0e7] rounded-full text-xs text-[#104c66]">Health</span>
                    <span className="inline-block px-3 py-1 bg-[#c0e0e7] rounded-full text-xs text-[#104c66]">Function</span>
                    <span className="inline-block px-3 py-1 bg-[#c0e0e7] rounded-full text-xs text-[#104c66]">Aesthetics</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Vision Card */}
          <Card className="border-none shadow-md overflow-hidden bg-white rounded-2xl transform transition-transform hover:-translate-y-1 hover:shadow-lg">
            <CardContent className="p-6">
              <div className="flex flex-col h-full">
                <div className="mb-4 text-[#104c66]">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-10 w-10"
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#104c66] mb-3">Our Vision</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  To become <span className="font-semibold text-[#104c66]">East London's leading orthodontic provider</span> by offering the highest standard of
                  care, advancing patient education, and utilizing <span className="font-semibold text-[#104c66]">cutting-edge technology</span> for efficient and
                  comfortable treatment experiences.
                </p>
                <div className="mt-auto pt-4 border-t border-[#e8f4f0]">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-[#104c66] flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-white text-xs font-bold">1</span>
                      </div>
                      <div className="text-[#104c66] text-sm">Leading East London provider</div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-[#104c66] flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-white text-xs font-bold">2</span>
                      </div>
                      <div className="text-[#104c66] text-sm">Advanced patient education</div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-[#104c66] flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-white text-xs font-bold">3</span>
                      </div>
                      <div className="text-[#104c66] text-sm">Cutting-edge technology</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-12">
          <div className="bg-white/60 backdrop-blur-sm p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-[#104c66]/10 rounded-full flex items-center justify-center mb-4">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="22" 
                height="22" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="text-[#104c66]"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#104c66] mb-2">Patient Safety</h3>
            <p className="text-sm text-gray-600">Your health and safety are our top priorities in everything we do.</p>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-[#104c66]/10 rounded-full flex items-center justify-center mb-4">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="22" 
                height="22" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="text-[#104c66]"
              >
                <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
                <line x1="16" y1="8" x2="2" y2="22"></line>
                <line x1="17.5" y1="15" x2="9" y2="15"></line>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#104c66] mb-2">Customized Care</h3>
            <p className="text-sm text-gray-600">Every treatment plan is tailored to your unique orthodontic needs.</p>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-[#104c66]/10 rounded-full flex items-center justify-center mb-4">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="22" 
                height="22" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="text-[#104c66]"
              >
                <polyline points="4 17 10 11 4 5"></polyline>
                <line x1="12" y1="19" x2="20" y2="19"></line>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#104c66] mb-2">Expert Guidance</h3>
            <p className="text-sm text-gray-600">Our specialists guide you through every step of your treatment journey.</p>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-[#104c66]/10 rounded-full flex items-center justify-center mb-4">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="22" 
                height="22" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="text-[#104c66]"
              >
                <path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
                <path d="M21.2 8A10 10 0 0 0 15 2.8"></path>
                <path d="M12 9h4a4 4 0 0 1 0 8h-1"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#104c66] mb-2">Patient Education</h3>
            <p className="text-sm text-gray-600">Empowering you with knowledge about your orthodontic health.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
