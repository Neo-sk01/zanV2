"use client"

import * as React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HeroHeader } from '@/components/hero8-header'
import { ServicesSection } from '@/components/services-section'

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden">
                <section>
                    <div className="pb-16 pt-8 md:pb-24 lg:pb-40 lg:pt-32">
                        <div className="relative mx-auto flex max-w-5xl flex-col px-5 lg:flex-row items-center">
                            <div className="mx-auto max-w-md text-center lg:ml-0 lg:w-1/2 lg:text-left">
                                <h1 className="mt-6 max-w-2xl text-balance text-4xl font-medium text-[#104c66] md:text-5xl lg:mt-12 xl:text-6xl">Zan Orthodontics</h1>
                                <div className="mt-3">
                                    <p className="text-xl font-semibold text-[#1e6a7d] italic">"your path to perfect alignment"</p>
                                </div>
                                <p className="mt-6 max-w-xl text-pretty text-base">Professional orthodontic care tailored to your needs, offering everything from traditional braces to the latest clear aligner technology.</p>

                                <div className="mt-8 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="bg-[#104c66] hover:bg-[#1a6d8f] px-4 text-base">
                                        <Link href="#appointment">
                                            <span className="text-nowrap">Book Appointment</span>
                                        </Link>
                                    </Button>
                                    <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="px-4 text-base">
                                        <Link href="#services">
                                            <span className="text-nowrap">View Services</span>
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="mt-6 lg:mt-0 lg:w-1/2">
                                <div className="relative rounded-lg overflow-hidden shadow-xl max-w-[329px] mx-auto lg:mx-0" style={{ aspectRatio: "329/492" }}>
                                    <video 
                                        autoPlay 
                                        loop 
                                        muted 
                                        playsInline
                                        className="w-full h-full object-cover"
                                    >
                                        <source src="/media/Blue Professional Dental Care Instagram Reels (1920 x 1080 px) (329 x 492 px).mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Section with Slider */}
                <section id="services">
                    <ServicesSection />
                </section>
            </main>
        </>
    )
}
