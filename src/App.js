import './App.css';
import { useState, useRef } from 'react';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import About from './components/about/About';
import Location from './sections/location/Location';
import Contact from './sections/contact/Contact';
import Hero from './components/hero/Hero';
import { FiAlignJustify } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";

function App() {
  const sectionRefs = useRef({});

  const scrollToSection = (sectionId) => {
    console.log(`${sectionId} has been clicked`)
    const element = sectionRefs.current[sectionId];
    if (element) {
      const navbarHeight = 80; // Adjust this to match your navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
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
      <Navbar items = {navItems} scrollToSection={scrollToSection}/>

      
      {/* Hero section */}
      <div ref={(el) => sectionRefs.current['home'] = el}>
        <Hero scrollToSection={scrollToSection} />
      </div>

      {/* About us */}
      <section 
        id = "about" 
        ref={(el) => sectionRefs.current['about'] = el}
        className ="w-full flex justify-center min-h-screen"
      >
          <About />
      </section>


      {/* Location (visit us) */}
      <section 
        className = "w-full min-h-screen"
        ref={(el) => sectionRefs.current['location'] = el}
      >
        <Location id = "location" />
      </section>


      {/* Contact */}
      <section 
        id = "contact" 
        ref={(el) => sectionRefs.current['contact'] = el}
        className = "w-full min-h-screen"
      >
        <Contact />
      </section>

      <Footer items={navItems} scrollToSection={scrollToSection}/>
    </div>
  );
}

export default App;