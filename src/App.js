import './App.css';
import { useState, useRef } from 'react';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import About from './components/about/About';
import Location from './sections/location/Location';
import Contact from './sections/contact/Contact';

import { FiAlignJustify } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";

function App() {
  const [ isDropDownOpen, setIsDropDownOpen ] = useState(false);
  const sectionRefs = useRef({});

  const scrollToSection = (sectionId) => {
    console.log(`${sectionId.id} has been clicked`)
    sectionRefs.current[sectionId]?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  }

  const navItems = [
    { id: "home", sectionName: "Home"},
    { id: "about", sectionName: "About Us"},
    { id: "menu", sectionName: "Menu"},
    { id: "location", sectionName: "Location"},
    { id: "contact", sectionName: "Contact"},
  ]

  return (
    <div className = "min-h-screen">
      {/* navbar */}
      <nav className = "fixed top-0 z-50 sm:px-4 md:px-24 py-2 border border-b-gray-100 w-full bg-white">
        <div className = "flex items-center justify-between">
          <div className="flex flex-col hover:cursor-pointer" onClick={() => scrollToSection("home")}>
            <div className="flex items-baseline gap-1">
              <span className="font-bold text-lg tracking-wide">RNY</span>
              <span className="font-bold text-lg tracking-widest">COFFEE</span>
            </div>
            <span className="text-sm font-serif italic -mt-1">Studio</span>
          </div>

          <div className = "hidden md:flex gap-4">
            {navItems.map((item) => (
              <button 
                key = {item.id} 
                onClick = {() => scrollToSection(item.id)}
                className = "p-2 font-light text-gray-700 hover:cursor-pointer hover:text-[#d0bb94] hover:font-semibold"
              >
                {item.sectionName}
              </button>
            ))}
          </div>

          {/* mobile dropdown */}
          <div className = "md:hidden block">
            <div 
              className = "hover:cursor-pointer"
              onClick = {() => setIsDropDownOpen(!isDropDownOpen)}
            >
              { 
                isDropDownOpen ? 
                  <IoCloseSharp className = "text-2xl font-bold"/> 
                    : 
                  <FiAlignJustify className = "text-2xl font-bold" />
               }
            </div>
            {isDropDownOpen && (
              <div className="fixed inset-x-0  bg-white z-40 md:hidden">
                <div className="flex flex-col top-16 bottom-0  px-6 py-4">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setIsDropDownOpen(false)}
                      className="text-left py-2 border-b border-gray-100 text-sm font-light"
                    >
                      {item.sectionName}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
      {/* Hero section */}

      <section id = "home" className = "relative w-full min-h-screen flex items-center justify-center">
        <div className = "absolute inset-0 z-0">
          <img
            src = "/images/hero.jpg"
            alt = "hero_image"
            className = "w-full h-full object-cover blur-xs"/>
            {/* dark overlay */}
            <div className = "absolute inset-0 bg-black/50"></div>
        </div>

        <div className = "relative z-10">
            {/* Roast ‘N Yield */}
            <div className = "flex flex-col justify-cetner items-center gap-4">
              <h1 className = "font-bold text-2xl text-white">Roast 'N Yield</h1>
              <p className = "text-xl text-white font-light">Roast with passion, yield with purpose</p>
            </div>
            <div className = "grid md:grid-cols-1 lg:grid-cols-2 gap-4 mt-10">
              <button className = "rounded-lg py-2 font-bold bg-white border border-transparent hover:bg-transparent hover:border-white hover:text-white">Order</button>
              <button className = "rounded-lg py-2 border border-white font-bold text-white hover:bg-white hover:text-black">Visit Us</button>
            </div>
        </div>
      </section>

      {/* About us */}
      <section id = "about" className ="w-full flex justify-center min-h-screen">
          <About />
      </section>

      {/* online order */}
      <section className = "w-full min-h-screen"> 

      </section>
      {/* Location (visit us) */}
      <section className = "w-full min-h-screen">
        <Location id = "location" />
      </section>


      {/* Contact */}
      <section id = "contact" className = "w-full min-h-screen">
        <Contact />
      </section>

      <Footer items={navItems} scrollToSection={scrollToSection}/>

     
      
      
   
    </div>
  );
}

export default App;
