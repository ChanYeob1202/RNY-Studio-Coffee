import React, { useEffect } from 'react'

export default function Order() {
  useEffect(() => {
    // Load Toast widget script
    const script = document.createElement('script');
    script.src = 'https://www.toasttab.com/widgets/toast-takeout-button.js';
    script.async = true;
    script.onload = () => {
      console.log('Toast widget script loaded');
    };
    script.onerror = () => {
      console.error('Failed to load Toast widget');
    };
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 px-8 py-20">
      
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Order Online
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl">
          Browse our menu and place your order for pickup.
        </p>
      </div>

      {/* Toast Widget Container */}
      <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 w-full max-w-4xl">
        <div 
          className="toast-takeout-button" 
          data-toast-restaurant-external-id="rny-coffee-studio-3829-west-6th-street"
          data-toast-base-url="https://www.toasttab.com"
        >
          {/* Fallback link if widget doesn't load */}
          <a 
            href="https://order.toasttab.com/online/rny-coffee-studio-3829-west-6th-street"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-500 text-white font-bold text-lg py-4 px-8 rounded-lg hover:bg-orange-600 transition"
          >
            Order Now on Toast
          </a>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-8 text-center text-gray-600 text-sm">
        <p>Questions about your order? Call us at (213) 908-5141</p>
      </div>
    </div>
  )
}