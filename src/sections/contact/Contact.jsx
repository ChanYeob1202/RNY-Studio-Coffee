import React from 'react'
import { FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa6";

export default function Contact() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-neutral-50">
      
      {/* Simple Header */}
      <div className="text-center mb-16 max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
          Get In Touch
        </h2>
        <p className="text-lg text-gray-600">
          We'd love to hear from you
        </p>
      </div>

      {/* Contact Methods */}
      <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        
        {/* Phone */}
        <div className="text-center p-8 bg-white hover:shadow-lg transition duration-300">
          <FaPhone className="text-3xl text-gray-900 mx-auto mb-4" aria-hidden = 'true' />
          <h3 className="font-medium text-gray-900 mb-2">Call Us</h3>
          <a 
            href="tel:2139085141" 
            className="text-gray-600 hover:text-gray-900 transition"
          >
            (213) 908-5141
          </a>
        </div>

        {/* Email */}
        <div className="text-center p-8 bg-white hover:shadow-lg transition duration-300">
          <FaEnvelope className="text-3xl text-gray-900 mx-auto mb-4" aria-hidden = 'true' />
          <h3 className="font-medium text-gray-900 mb-2">Email Us</h3>
          <a 
            href="mailto:rnycoffeestudio@gmail.com" 
            className="text-gray-600 hover:text-gray-900 transition text-sm"
          >
            rnycoffeestudio@gmail.com
          </a>
        </div>

        {/* Instagram */}
        <div className="text-center p-8 bg-white hover:shadow-lg transition duration-300">
          <FaInstagram className="text-3xl text-gray-900 mx-auto mb-4"  aria-hidden = 'true'/>
          <h3 className="font-medium text-gray-900 mb-2">Follow Us</h3>
          <a 
            href="https://instagram.com/rny_coffeestudio" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition"
          >
            @rny_coffeestudio
          </a>
        </div>
      </div>

      {/* Additional Info */}
      <div className="text-center max-w-xl">
        <p className="text-gray-600 leading-relaxed">
          Drop by during our hours, give us a call, or send us a DM on Instagram. 
          We're always happy to chat about coffee, events, or just to say hello!
        </p>
      </div>
    </div>
  )
}