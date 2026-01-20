import React from 'react'

export default function Location() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center px-6 py-20 bg-neutral-50">
      
      {/* Simple Header */}
      <div className="text-center mb-16 max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
          Visit Us
        </h2>
        <p className="text-lg text-gray-600">
          Located in the heart of Koreatown
        </p>
      </div>

      {/* Clean Info Cards */}
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        
        <div className="text-center space-y-2">
          <div className="text-2xl mb-3">📍</div>
          <h3 className="font-medium text-gray-900">Address</h3>
          <p className="text-sm text-gray-600">
            3829 W 6th St<br/>
            Los Angeles, CA 90020
          </p>
        </div>

        <div className="text-center space-y-2">
          <div className="text-2xl mb-3">⏰</div>
          <h3 className="font-medium text-gray-900">Hours</h3>
          <p className="text-sm text-gray-600">
            Mon-Fri: 7am - 10pm<br/>
            Sat: 8am - 10pm<br/>
            Sun: 8am - 7pm
          </p>
        </div>

        <div className="text-center space-y-2">
          <div className="text-2xl mb-3">📞</div>
          <h3 className="font-medium text-gray-900">Contact</h3>
          <p className="text-sm text-gray-600">
            (213) 908-5141
          </p>
        </div>
      </div>

      {/* Map - No Border */}
      <div className="w-full max-w-5xl">
        <iframe 
          title="RNY Coffee Studio Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.219567833916!2d-118.30631969999997!3d34.063885299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b97348612e85%3A0xd91400aefaf5b6ef!2sRNY Coffee Studio!5e0!3m2!1sen!2sus!4v1761447499199!5m2!1sen!2sus" 
          allowFullScreen
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[400px] md:h-[500px] grayscale"
          width="1200"
          height="500"
        />
      </div>
    </div>
  )
}