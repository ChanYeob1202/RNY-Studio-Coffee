import React from 'react'
import { FaWifi, FaParking, FaCoffee, FaLaptop } from "react-icons/fa";
import { GiMilkCarton } from "react-icons/gi";

export default function CoffeeInfo() {
  const amenities = [
    {
      icon: <FaWifi className="text-3xl" />,
      title: "Free WiFi",
      description: "Stay connected with complimentary high-speed internet"
    },
    {
      icon: <FaParking className="text-3xl" />,
      title: "Valet Parking",
      description: "Available after 11 AM for your convenience"
    },
    {
      icon: <GiMilkCarton className="text-3xl" />,
      title: "Milk Alternatives",
      description: "Oat and almond milk available for all drinks"
    },
    {
      icon: <FaLaptop className="text-3xl" />,
      title: "Work-Friendly",
      description: "Stay as long as you'd like - perfect for remote work"
    }
  ];

  return (
    <div className="w-full min-h-screen flex flex-col items-center px-6 py-20 bg-white">
      
      {/* Our Coffee Header */}
      <div className="text-center mb-16 max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
          Our Coffee
        </h2>
        <p className="text-lg text-gray-600">
          Exceptional beans, expertly crafted
        </p>
      </div>

      {/* Roastery Partner Section */}
      <div className="w-full max-w-4xl mb-24">
        <div className="bg-neutral-50 p-12 text-center">
          <div className="mb-6">
            <FaCoffee className="text-5xl text-gray-900 mx-auto mb-4" />
          </div>
          <h3 className="text-3xl font-light mb-4 text-gray-900">
            Proudly Serving Stumptown Coffee
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We partner with Stumptown Coffee Roasters to bring you some of the finest 
            specialty coffee available. Known for their commitment to direct trade and 
            sustainable sourcing, Stumptown shares our passion for exceptional coffee 
            and ethical practices.
          </p>
        </div>
      </div>

      {/* Amenities Section */}
      <div className="w-full max-w-6xl">
        <h3 className="text-3xl font-light text-center mb-12 text-gray-900">
          What We Offer
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <div 
              key={index} 
              className="text-center space-y-4 p-6 hover:bg-neutral-50 transition duration-300"
            >
              <div className="text-gray-900 flex justify-center">
                {amenity.icon}
              </div>
              <h4 className="font-medium text-gray-900 text-lg">
                {amenity.title}
              </h4>
              <p className="text-sm text-gray-600">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Info */}
      
    </div>
  )
}

