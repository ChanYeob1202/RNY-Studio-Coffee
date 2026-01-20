import React, { useState } from 'react'
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar({ items, scrollToSection }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        
        {/* Logo - Simpler */}
        <button 
          onClick={() => scrollToSection("home")}
          className="flex flex-col hover:opacity-70 transition"
        >
          <div className="flex items-baseline gap-1">
            <span className="font-light text-lg tracking-wide">RNY</span>
            <span className="font-light text-lg tracking-widest">COFFEE</span>
          </div>
        <span className="text-xs font-serif italic -mt-1 text-gray-600">Studio</span>
        </button>

        {/* Desktop Menu - Minimal */}
        <div className="hidden md:flex gap-8">
          {items.map((item) => (
            <button 
              key={item.id} 
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-light text-gray-700 hover:text-black transition"
            >
              {item.sectionName}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label = {isOpen ? "Close Menu" : "Open Menu"}
          aria-expanded = {isOpen}
          aria-controls='mobile-menu'
        >
          {isOpen ? <FiX className="text-2xl" aria-hidden = "true" focusable="false"/> : <FiMenu className="text-2xl" aria-hidden = "true" focusable="false"/>}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-6 py-4 space-y-3">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsOpen(false);
                }}
                className="block w-full text-left py-2 text-sm font-light text-gray-700"
              >
                {item.sectionName}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}