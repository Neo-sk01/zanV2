"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  bgColor: string;
  image: string;
  cta?: string;
}

export function ServicesSection() {
  const services: Service[] = [
    {
      id: 1,
      title: "Metal Braces",
      description: "Traditional metal braces remain the most common type of braces used today. They are now smaller and more comfortable than ever before, constructed from high-grade, advanced metal alloys. With metal braces, you have the option of adding coloured elastics (rubber bands) for a unique and colourful smile.",
      icon: "/icons/traditional-braces.svg",
      bgColor: "bg-blue-50",
      image: "/media/images/Copy of Blue Professional Dental Care Instagram Reels (1920 x 1080 px) (Instagram Post (45)).svg",
      cta: "Book now"
    },
    {
      id: 2,
      title: "Ceramic Braces",
      description: "Ceramic braces are crafted from clear materials, making them less visible on your teeth compared to metal braces. For this reason, they are primarily chosen by teenagers and adults with aesthetic concerns. While they are visually less prominent, ceramic braces require more attention to oral hygiene since they are slightly larger. The only drawback to ceramic brackets is that they are more fragile, and the elastic ties can discolour between orthodontic visits due to certain foods and smoking.",
      icon: "/icons/ceramic-braces.svg",
      bgColor: "bg-indigo-50",
      image: "/media/images/Copy of Blue Professional Dental Care Instagram Reels (1920 x 1080 px) (Instagram Post (45))-2.svg",
    },
    {
      id: 3,
      title: "Aligners / Invisible Braces",
      description: "Clear appliances like Invisalign utilise a series of virtually invisible, removable, and comfortable aligners to straighten your teeth. Since they are nearly invisible, no one will notice you're wearing them. The aligners are removable, so you're not restricted in what you can eat and drink during treatment, and brushing and flossing become less of a hassle. Additionally, they are comfortable and contain no metal components, eliminating the risk of mouth abrasions during treatment.",
      icon: "/icons/invisalign.svg",
      bgColor: "bg-purple-50",
      image: "/media/images/Copy of Blue Professional Dental Care Instagram Reels (1920 x 1080 px) (Instagram Post (45))-3.svg",
    }
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="services" className="py-16 md:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">Our Services</h2>
          <p className="text-base md:text-lg text-slate-600">
            At Zan Orthodontics, we combine advanced orthodontic technology with personalised care to offer you more treatment options than ever before. Whether you're considering traditional metal braces, discreet clear braces popular among teens and adults, or the "braceless" alternative of Invisalign removable aligners, we have a solution that's perfect for you. Dr Zukiswa Tandokazi Nombakuse and our dedicated team are here to help you determine the best treatment option to achieve the straight, beautiful smile you deserve.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Tab navigation */}
          <div className="flex flex-wrap border-b border-slate-200 mb-12">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(index)}
                className={cn(
                  "py-4 px-6 text-lg font-medium transition-all focus:outline-none relative",
                  activeTab === index 
                    ? "text-slate-900" 
                    : "text-slate-500 hover:text-slate-700"
                )}
              >
                {service.title}
                {activeTab === index && (
                  <motion.div 
                    layoutId="activeTabIndicator"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-slate-900"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Tab content with transitions */}
          <div className="relative min-h-[550px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid md:grid-cols-2 gap-8 md:gap-16"
              >
                {/* Left column - Content */}
                <div>
                  <div className={cn(
                    "inline-flex items-center justify-center p-4 rounded-2xl mb-6", 
                    services[activeTab].bgColor
                  )}>
                    <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-sm">
                      <Image
                        src={services[activeTab].icon}
                        alt={services[activeTab].title}
                        width={32}
                        height={32}
                      />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900">{services[activeTab].title}</h3>
                  
                  <div className="prose prose-slate max-w-none mb-8">
                    <p className="text-slate-700 text-lg leading-relaxed">
                      {services[activeTab].description}
                    </p>
                  </div>
                  
                  <div className="mt-8">
                    <Link
                      href="#contact"
                      className={cn(
                        "inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-full shadow-sm",
                        "bg-slate-900 text-white hover:bg-slate-800 transition-colors"
                      )}
                    >
                      {services[activeTab].cta || "Learn More"}
                    </Link>
                  </div>
                </div>
                
                {/* Right column - Image */}
                <div className="relative rounded-2xl overflow-hidden h-full min-h-[350px] md:min-h-[450px] flex items-center justify-center">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="relative w-full h-full">
                      <Image
                        src={services[activeTab].image}
                        alt={services[activeTab].title}
                        fill
                        style={{ objectFit: "contain", objectPosition: "center" }}
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Additional features showcase */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Quality Materials</h3>
              <p className="text-slate-600">We use only the highest quality materials for all our orthodontic treatments.</p>
            </div>
            
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Efficient Treatment</h3>
              <p className="text-slate-600">Our treatments are designed to be efficient and minimize your time in the chair.</p>
            </div>
            
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Expert Care</h3>
              <p className="text-slate-600">Our team of specialists provides personalized attention for every patient.</p>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="mt-16 p-8 md:p-12 bg-slate-900 rounded-2xl text-center">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Ready to transform your smile?</h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">Schedule a consultation with Dr. Zukiswa Tandokazi Nombakuse and our experienced team at Zan Orthodontics to discover which treatment option is right for you.</p>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-full shadow-sm bg-white text-slate-900 hover:bg-slate-100 transition-colors"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
