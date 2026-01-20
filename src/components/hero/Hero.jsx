import React from 'react'

export default function Hero({ scrollToSection }) {

  const trackOrderClick = () => {
    //GA4 gtag is created by the snippet I added in public index.html
    if(window.gtag){
      window.gtag("event", "order_online_click", {
        event_category: "engagement",
        event_label: "hero_order_now",
      })
    }
  }


  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.jpg"
          alt="hero_image"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Hero Content - Simpler & Bigger */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight font-serif">
          RNY Coffee Studio
        </h1>
        <p className="text-xl md:text-2xl text-white/90 font-light mb-12 font-serif">
          Roast with passion, yield with purpose
        </p>
        
        {/* Simpler Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://order.toasttab.com/online/rny-coffee-studio-3829-west-6th-street"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-white text-black font-medium hover:bg-white/90 transition-all"
            onClick = {trackOrderClick}
          > 
            Order Now
          </a>
          <button 
            onClick={() => scrollToSection("location")}
            className="px-8 py-4 border-2 rounded-full border-white text-white font-medium hover:bg-white hover:text-black transition-all"
          >
            Visit Us
          </button>
        </div>
      </div>
    </section>
  )
}