import React from 'react'

export default function About() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 py-20 bg-white">
      
      {/* Cleaner Header */}
      <div className="max-w-3xl text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
          Our Story
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Since 2022, we've been serving the finest coffee and creating a welcoming space 
          where community thrives.
        </p>
      </div>

      {/* Simpler Two Column Layout */}
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Image */}
        <div>
          <img 
            src="/images/about2.jpg"
            alt="RNY Coffee Studio atmosphere"
            className="w-full h-[500px] rounded-2xl object-cover"
            loading="lazy"
          />
        </div>
        
        {/* Content */}
        <div className="space-y-6 text-gray-700 text-base leading-relaxed">
          <p>
            Welcome to RNY, your local spot for specialty coffee done right. We're more than a cafe—we're your neighborhood gathering place where everyone's welcome and every drink is crafted with care.
          </p>
          
          <p>
            We source our beans from specialty farms, roast in small batches, and brew everything fresh to order. Whether you're here for espresso, pour-over, or matcha, we treat each drink with dedication to quality and craftsmanship.
          </p>
          
          <p>
            Come slow down, connect, and experience coffee the way it's meant to be enjoyed.
          </p>
        </div>
      </div>

    </div>
  )
}