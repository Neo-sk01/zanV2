"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    reason: "consultation"
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({
        name: "",
        email: "",
        phone: "",
        message: "",
        reason: "consultation"
      });
    }, 3000);
  };
  
  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-[#f0f8fa] to-white relative overflow-hidden">
      {/* Content container */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h5 className="inline-block px-5 py-1 bg-[#104c66]/10 rounded-full text-[#104c66] text-sm font-medium mb-3">GET IN TOUCH</h5>
          <h2 className="text-3xl md:text-4xl font-bold text-[#104c66]">Contact Us</h2>
          <div className="w-20 h-1 bg-[#74B4D0] mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about our orthodontic services or want to schedule an appointment? 
            Reach out to our friendly team today.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8">
              <h3 className="text-xl font-semibold text-[#104c66] mb-6">Send Us a Message</h3>
              
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 border border-green-200 text-green-700 px-6 py-8 rounded-lg text-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <h4 className="text-lg font-medium mb-2">Thank You!</h4>
                  <p>Your message has been sent successfully. We'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#74B4D0] focus:border-[#74B4D0] outline-none transition"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#74B4D0] focus:border-[#74B4D0] outline-none transition"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#74B4D0] focus:border-[#74B4D0] outline-none transition"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                    <div>
                      <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">
                        Reason for Contact
                      </label>
                      <select
                        id="reason"
                        name="reason"
                        value={formState.reason}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#74B4D0] focus:border-[#74B4D0] outline-none transition"
                      >
                        <option value="consultation">Initial Consultation</option>
                        <option value="braces">Traditional Braces</option>
                        <option value="ceramic">Ceramic Braces</option>
                        <option value="aligners">Clear Aligners (Invisalign)</option>
                        <option value="retention">Retention Programs</option>
                        <option value="monitoring">Orthodontic Monitoring</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#74B4D0] focus:border-[#74B4D0] outline-none transition"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#104c66] text-white py-3 px-6 rounded-lg hover:bg-[#0d3e54] transition duration-300 flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <div className="bg-gradient-to-br from-[#104c66] to-[#1a6e8e] text-white rounded-2xl shadow-lg overflow-hidden mb-8">
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-white/20 rounded-full p-2.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-semibold opacity-80">Our Location</h4>
                      <p className="mt-1">41 ST MARKS ROAD,<br />SOUTHERNWOOD, EAST LONDON,<br />EASTERN CAPE, 5213</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-white/20 rounded-full p-2.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-semibold opacity-80">Phone Number</h4>
                      <p className="mt-1">2025/259620/07</p>
                      <p className="text-sm opacity-80">Mon-Fri, 8:30 AM - 5:00 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-white/20 rounded-full p-2.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-semibold opacity-80">Email</h4>
                      <p className="mt-1">info@zanorthodontics.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Operating Hours */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-xl font-semibold text-[#104c66] mb-6">Operating Hours</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="font-medium">Monday - Friday</span>
                    <span className="text-[#104c66] font-semibold">8:30 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="font-medium">Saturday</span>
                    <span className="text-[#104c66] font-semibold">By Appointment</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="font-medium">Sunday</span>
                    <span className="text-[#104c66] font-semibold">Closed</span>
                  </div>
                  <div className="flex justify-between items-center pb-2">
                    <span className="font-medium">Public Holidays</span>
                    <span className="text-[#104c66] font-semibold">Closed</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <div className="bg-[#f0f8fa] rounded-lg p-4 border-l-4 border-[#74B4D0]">
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#104c66] mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div className="ml-3">
                        <h4 className="text-sm font-medium text-[#104c66]">Emergency Care</h4>
                        <p className="mt-1 text-sm text-gray-600">
                          For orthodontic emergencies outside normal hours, 
                          please call our emergency number: 2025/259620/07
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Map */}
        <div className="mt-16 rounded-2xl overflow-hidden shadow-lg h-[400px] relative bg-[#e8f4f0]">
          <div className="absolute inset-0 bg-[#104c66] opacity-10 z-10 pointer-events-none"></div>
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center px-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#104c66] opacity-30 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-[#104c66] opacity-60 max-w-lg">
                Find us at 41 ST MARKS ROAD, SOUTHERNWOOD, EAST LONDON, EASTERN CAPE, 5213
              </p>
            </div>
          </div>
          <div className="absolute left-8 top-8 z-20">
            <div className="bg-white rounded-lg shadow-lg p-4 max-w-xs">
              <h4 className="font-semibold text-[#104c66]">ZAN ORTHODONTICS</h4>
              <p className="text-sm text-gray-600 mt-1">41 ST MARKS ROAD, SOUTHERNWOOD, EAST LONDON, EASTERN CAPE, 5213</p>
              <a 
                href="https://maps.google.com/?q=41+ST+MARKS+ROAD+SOUTHERNWOOD+EAST+LONDON+EASTERN+CAPE+5213" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-2 text-sm text-[#104c66] font-medium hover:underline flex items-center"
              >
                Get Directions
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
