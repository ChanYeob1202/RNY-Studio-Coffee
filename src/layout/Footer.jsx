import React from 'react'
import { FaInstagram } from "react-icons/fa6";

export default function Footer({items, scrollToSection}) {
  return (
    <footer className="bg-gray-900 text-gray-300">
    <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            
            {/* Brand Section */}
            <div>
                <div className="flex flex-col mb-4">
                    <div className="flex items-baseline gap-1">
                        <span className="font-bold text-xl tracking-wide text-white">RNY</span>
                        <span className="font-bold text-xl tracking-widest text-white">COFFEE</span>
                    </div>
                    <span className="text-base font-serif italic -mt-1 text-gray-400">Studio</span>
                </div>
                <p className="text-gray-400 text-sm">
                    Roast with passion, yield with purpose. 
                    Crafting exceptional coffee experiences in the heart of Koreatown.
                </p>
            </div>

            {/* Quick Links */}
            <div>
                <h3 className="font-semibold text-white mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                    {items.map((item) => (
                        <li key={item.id}>
                            <button 
                                onClick={() => scrollToSection(item.id)}
                                className="hover:text-[#d0bb94] transition-colors"
                            >
                                {item.sectionName}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Contact & Hours */}
            <div>
                <h3 className="font-semibold text-white mb-4">Visit Us</h3>
                <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                        <span>📍</span>
                        <span>3829 W 6th St<br/>Los Angeles, CA 90020</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <span>📞</span>
                        <span>(213) 908-5141</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span>⏰</span>
                        <div>
                            <div>Mon-Fri: 7am - 10pm</div>
                            <div>Sat: 8am - 10pm</div>
                            <div>Sun: 8am - 7pm</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} RNY Coffee Studio. All rights reserved.
            </p>
            
            {/* Social Media */}
            <div className="flex gap-4">
                <a 
                    href="https://instagram.com/your_handle" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 p-2 rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition"
                    aria-label="Instagram"
                >
                    <FaInstagram className="text-xl" />
                </a>
            </div>
        </div>
    </div>
</footer>
  )
}
