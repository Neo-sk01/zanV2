import { Card, CardContent } from "@/components/ui/card";
import HeroSection from "@/components/hero-section";
import MissionVision from "@/components/mission-vision";
import FooterSection from "@/components/footer-section";
import ContactSection from "@/components/contact-section";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f0f8fa]">
      {/* Hero Section */}
      <HeroSection />

      {/* Operating Hours */}
      <section className="w-full mb-6 bg-[#f0f8fa]">
        <div className="container mx-auto px-4">
          <Card className="w-full bg-[#c0e0e7] border-none shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#104c66]/20">
              <div className="p-6 text-center">
                <h3 className="font-medium text-[#104c66]">Monday – Friday</h3>
                <p className="text-lg font-semibold text-[#104c66]">8:30 AM – 5:00 PM</p>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-medium text-[#104c66]">Saturday</h3>
                <p className="text-lg font-semibold text-[#104c66]">By Appointment</p>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-medium text-[#104c66]">Sunday</h3>
                <p className="text-lg font-semibold text-[#104c66]">Closed</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <MissionVision />

      {/* Why Choose Us Section */}
      <section className="w-full py-16 bg-[#89c7d6] relative overflow-hidden" id="about">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <h5 className="inline-block px-5 py-1 bg-[#1e6a7d]/10 backdrop-blur-sm rounded-full text-[#1e6a7d] text-sm font-medium mb-3">ABOUT OUR PRACTICE</h5>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e6a7d]">Why Patients Choose Us</h2>
            <div className="w-20 h-1 bg-[#1e6a7d]/70 mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="order-2 lg:order-1 bg-white rounded-2xl shadow-md overflow-hidden p-6 transform transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div className="flex flex-col h-full">
                <div className="mb-4 text-[#1e6a7d]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#1e6a7d] mb-3">Expert Care</h3>
                <p className="text-gray-600 mb-4 flex-grow">Our team of orthodontic specialists brings decades of combined experience to provide exceptional care for patients of all ages.</p>
                <div className="mt-auto pt-4 border-t border-[#e8f4f0]">
                  <div className="flex items-center">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-500">4.9/5 Patient Rating</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Middle Column with Image */}
            <div className="order-1 lg:order-2 col-span-1">
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
                <Image 
                  src="/media/images/colored-braces.jpg" 
                  alt="Colored orthodontic braces on teeth" 
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#104c66]/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <h3 className="text-xl font-semibold mb-2">Your Smile Journey</h3>
                    <p className="text-sm">From your first consultation to your final reveal, we're with you every step of the way.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="order-3 bg-white rounded-2xl shadow-md overflow-hidden p-6 transform transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div className="flex flex-col h-full">
                <div className="mb-4 text-[#1e6a7d]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#1e6a7d] mb-3">Personalized Treatment</h3>
                <p className="text-gray-600 mb-4 flex-grow">We create customized treatment plans that fit your unique needs, lifestyle, and budget with flexible payment options.</p>
                <div className="mt-auto pt-4 border-t border-[#e8f4f0]">
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block px-3 py-1 bg-[#e8f4f0] rounded-full text-xs text-[#1e6a7d]">Traditional Braces</span>
                    <span className="inline-block px-3 py-1 bg-[#e8f4f0] rounded-full text-xs text-[#1e6a7d]">Ceramic Braces</span>
                    <span className="inline-block px-3 py-1 bg-[#e8f4f0] rounded-full text-xs text-[#1e6a7d]">Clear Aligners</span>
                    <span className="inline-block px-3 py-1 bg-[#e8f4f0] rounded-full text-xs text-[#1e6a7d]">Retainers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-12">
            <div className="bg-white/90 backdrop-blur-sm p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#1e6a7d]/10 rounded-full flex items-center justify-center mb-4">
                <Image 
                  src="/icons/check.svg" 
                  alt="Check" 
                  width={22} 
                  height={22}
                  className="text-[#1e6a7d]"
                />
              </div>
              <h3 className="text-lg font-semibold text-[#1e6a7d] mb-2">Comfortable Environment</h3>
              <p className="text-sm text-gray-600">State-of-the-art facilities designed with your comfort in mind.</p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#1e6a7d]/10 rounded-full flex items-center justify-center mb-4">
                <Image 
                  src="/icons/check.svg" 
                  alt="Check" 
                  width={22} 
                  height={22}
                  className="text-[#1e6a7d]"
                />
              </div>
              <h3 className="text-lg font-semibold text-[#1e6a7d] mb-2">Affordable Payment Plans</h3>
              <p className="text-sm text-gray-600">Flexible options to make orthodontic care accessible for everyone.</p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#1e6a7d]/10 rounded-full flex items-center justify-center mb-4">
                <Image 
                  src="/icons/check.svg" 
                  alt="Check" 
                  width={22} 
                  height={22}
                  className="text-[#1e6a7d]"
                />
              </div>
              <h3 className="text-lg font-semibold text-[#1e6a7d] mb-2">Experienced Team</h3>
              <p className="text-sm text-gray-600">Highly trained professionals with years of specialized experience.</p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#1e6a7d]/10 rounded-full flex items-center justify-center mb-4">
                <Image 
                  src="/icons/check.svg" 
                  alt="Check" 
                  width={22} 
                  height={22}
                  className="text-[#1e6a7d]"
                />
              </div>
              <h3 className="text-lg font-semibold text-[#1e6a7d] mb-2">Advanced Technology</h3>
              <p className="text-sm text-gray-600">Modern equipment and digital systems for precise, efficient treatment.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <FooterSection />
    </div>
  );
}
