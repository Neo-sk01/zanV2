"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
  type CarouselApi,
} from "@/components/ui/carousel";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  bgColor: string;
  image: string;
}

export function ServicesSection() {
  const services: Service[] = [
    {
      id: 1,
      title: "Initial Consultation",
      description: "Comprehensive assessment including digital X-rays and 3D imaging to determine the best treatment plan for your unique needs.",
      icon: "/icons/consultation.svg",
      bgColor: "bg-blue-50",
      image: "/media/images/Blue Professional Dental Care Instagram Reels (1920 x 1080 px) (Instagram Post (45)) 2.png",
    },
    {
      id: 2,
      title: "Traditional Braces",
      description: "Standard braces for children and adolescents, providing effective and reliable treatment for various orthodontic issues.",
      icon: "/icons/traditional-braces.svg",
      bgColor: "bg-indigo-50",
      image: "/media/images/Blue Professional Dental Care Instagram Reels (1920 x 1080 px) (Instagram Post (45))-2.png",
    },
    {
      id: 3,
      title: "Ceramic Braces",
      description: "Aesthetic braces for adults and teens, offering a more discreet appearance while maintaining effective treatment results.",
      icon: "/icons/ceramic-braces.svg",
      bgColor: "bg-purple-50",
      image: "/media/images/Blue Professional Dental Care Instagram Reels (1920 x 1080 px) (Instagram Post (45))-3.png",
    },
    {
      id: 4,
      title: "Clear Aligners (Invisalign)",
      description: "Discreet treatment for adult professionals and image-conscious teenagers, allowing you to straighten your teeth without metal braces.",
      icon: "/icons/invisalign.svg",
      bgColor: "bg-sky-50",
      image: "/media/images/Blue Professional Dental Care Instagram Reels (1920 x 1080 px) (Instagram Post (45)) 2.png",
    },
    {
      id: 5,
      title: "Retention Programs",
      description: "Retainers and follow-up care post-treatment to ensure your smile stays beautiful for years to come.",
      icon: "/icons/retention.svg",
      bgColor: "bg-teal-50",
      image: "/media/images/Blue Professional Dental Care Instagram Reels (1920 x 1080 px) (Instagram Post (45))-2.png",
    },
    {
      id: 6,
      title: "Orthodontic Monitoring",
      description: "Use of remote consultations and digital check-ins to monitor your treatment progress without frequent in-office visits.",
      icon: "/icons/monitoring.svg",
      bgColor: "bg-cyan-50",
      image: "/media/images/Blue Professional Dental Care Instagram Reels (1920 x 1080 px) (Instagram Post (45))-3.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  const autoPlayIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const autoPlayDelay = 5000; // 5 seconds between slides
  const [isPlaying, setIsPlaying] = useState(true);
  const [sliderValue, setSliderValue] = useState([0]);

  // Effect to handle auto-play
  useEffect(() => {
    if (!api) return;

    const startAutoPlay = () => {
      if (isPlaying) {
        autoPlayIntervalRef.current = setInterval(() => {
          api.canScrollNext() ? api.scrollNext() : api.scrollTo(0);
        }, autoPlayDelay);
      }
    };

    const stopAutoPlay = () => {
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current);
        autoPlayIntervalRef.current = null;
      }
    };

    // Start autoplay
    startAutoPlay();

    // Cleanup on unmount
    return () => stopAutoPlay();
  }, [api, isPlaying, autoPlayDelay]);

  // Pause autoplay on hover/interaction
  const handleMouseEnter = () => {
    setIsPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsPlaying(true);
  };

  // Update current index when carousel changes
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      const index = api.selectedScrollSnap();
      setCurrentIndex(index);
      setSliderValue([index * (100 / (services.length - 1))]);
    };

    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, services.length]);

  // Handle manual slider change
  const handleSliderChange = (value: number[]) => {
    if (!api) return;
    
    const newIndex = Math.round((value[0] / 100) * (services.length - 1));
    setSliderValue(value);
    
    if (newIndex !== currentIndex) {
      api.scrollTo(newIndex);
    }
  };

  return (
    <section id="services" className="py-12 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2 text-slate-900">Our Services</h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            We offer comprehensive orthodontic care with the latest technology
          </p>
        </div>

        <div className="relative">
          <Carousel
            setApi={setApi}
            opts={{ loop: true, align: "center" }}
            className="w-full max-w-5xl mx-auto"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <CarouselContent>
              {services.map((service) => (
                <CarouselItem key={service.id} className="md:basis-3/4 lg:basis-2/3">
                  <div className="h-[400px]">
                    <AnimatePresence>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className={cn(
                          "h-full rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row border border-slate-100",
                          service.bgColor
                        )}
                      >
                        <div className="md:w-1/2 p-6 flex flex-col justify-center">
                          <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-4 shadow-sm">
                            <Image
                              src={service.icon}
                              alt={service.title}
                              width={24}
                              height={24}
                              className="text-slate-900"
                            />
                          </div>
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1, duration: 0.3 }}
                          >
                            <h3 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h3>
                            <p className="text-sm text-slate-700 mb-4 line-clamp-3">{service.description}</p>
                            <button className="mt-auto bg-slate-900 text-white py-1.5 px-4 rounded-full hover:bg-slate-800 transition-colors inline-block w-fit text-sm font-medium">
                              Learn More
                            </button>
                          </motion.div>
                        </div>
                        <div className="md:w-1/2 relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 z-10" />
                          <motion.div
                            initial={{ scale: 1.1 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.7 }}
                            className="h-full w-full relative"
                          >
                            <Image 
                              src={service.image}
                              alt={service.title}
                              fill
                              className="object-cover object-center"
                              priority={service.id === 1}
                            />
                          </motion.div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className="left-1 sm:left-2 h-9 w-9 opacity-70 hover:opacity-100" />
            <CarouselNext className="right-1 sm:right-2 h-9 w-9 opacity-70 hover:opacity-100" />
            
            {/* Custom slider control */}
            <div className="mt-6 max-w-lg mx-auto px-8">
              <Slider
                value={sliderValue}
                onValueChange={handleSliderChange}
                max={100}
                step={1}
                className="w-full cursor-pointer"
              />
              
              <div className="flex justify-between mt-2 text-xs text-slate-500">
                {services.map((service, index) => (
                  <div 
                    key={service.id} 
                    className={cn(
                      "text-center flex-1 cursor-pointer transition-colors",
                      currentIndex === index ? "text-slate-900 font-medium" : ""
                    )}
                    onClick={() => api?.scrollTo(index)}
                  >
                    <span className="hidden md:inline">{service.title}</span>
                    <span className="md:hidden">{index + 1}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-2 hidden sm:block">
              <CarouselDots itemCount={services.length} />
            </div>
            
            {/* Auto-play indicator */}
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs text-slate-700 flex items-center shadow-sm z-10">
              <span className="mr-1.5 font-medium">Auto-play</span>
              <div className={cn(
                "w-1.5 h-1.5 rounded-full transition-colors duration-300",
                isPlaying ? "bg-green-500" : "bg-slate-400"
              )} />
            </div>
          </Carousel>
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-slate-600 mb-4 max-w-xl mx-auto">
            Schedule an appointment today to learn more about our services
          </p>
          <button className="bg-slate-900 text-white px-6 py-2 rounded-full hover:bg-slate-800 transition-colors text-sm font-medium shadow-sm">
            Book a Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
