import React from 'react'
import { FaHeart } from "react-icons/fa";
import { FaPeopleRoof } from "react-icons/fa6";
import { GiCoffeeBeans } from "react-icons/gi";

export default function About() {
    const featureCards = [
        { 
            title: "Made With Love", 
            description: "every item on our menu is crafted with care and the finest ingredients",
            icon: <FaHeart />,
        }, 
        {
            title: "Community First",
            description: "we're more than a coffee - we are gathering place for friends and neighbors",
            icon: <FaPeopleRoof />,
        },
        {
            title: "Expertly Brewed",
            description: "Our trained baristas use traditional methods to ensure every cup is brewed to perfection",
            icon: <GiCoffeeBeans />,
        }
    ]

  return (
    <div className="w-full flex flex-col items-center justify-center px-6 md:px-10 lg:px-20 bg-gray-100">
      {/* about intro */}
      <div className="flex flex-col items-center justify-center mb-10 text-center">
        <h1 className="mt-10 mb-5 text-lg md:text-xl lg:text-2xl">
          Our Story
        </h1>
        <p className="text-gray-500 text-sm md:text-base">
          Since 2018, we've been serving the finest coffee and creating a welcoming space 
        </p>
        <p className="text-gray-500 text-sm md:text-base">
          where community thrives.
        </p>
      </div>

      {/* Image and text grid */}
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
        {/* about image */}
        <div className="rounded-lg">
          <img 
            src="/images/about.png"
            alt="about_image"
            className="mx-auto rounded-lg w-full lg:w-3/4 h-72 sm:h-80 md:h-96 lg:h-[29rem] object-cover"
          />
        </div>
        
        {/* text content */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 text-gray-700 text-sm md:text-base font-light leading-relaxed mt-10">
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

      {/* Feature Cards - implement yourself */}
      <div className = "w-full px-4 sm:px-8 md:px-12 lg:px-20 mt-20">
        <div className = "grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto max-w-5xl">
            {featureCards.map((card, index) => (
                <div key = {index} className = "flex flex-col items-center justify-center text-center gap-2">
                    <div className = "p-6 bg-gray-800 rounded-full text-white sm:text-md md:text-lg lg:text-2xl mb-4">{card.icon}</div>
                    <div className ="mb-4">{card.title}</div>
                    <div className ="text-gray-600 mb-10">{card.description}</div>
                </div>
            ))}
        </div>
      </div>

    </div>
  )
}