import React from 'react'
import { FaInstagram } from "react-icons/fa6";

export default function Footer({items, scrollToSection}) {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        
        {/* Single Row Layout */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="text-xl font-light text-white mb-2">RNY COFFEE</div>
            <p className="text-sm">Koreatown, Los Angeles</p>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-sm">
            {items.map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="hover:text-white transition"
              >
                {item.sectionName}
              </button>
            ))}
          </div>

          {/* Social */}
          <a 
            href="https://www.instagram.com/rnycoffeestudio/." 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaInstagram className="text-2xl" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm border-t border-gray-800 pt-8">
          © {new Date().getFullYear()} RNY Coffee Studio
        </div>
      </div>
    </footer>
  )
}