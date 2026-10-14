import React, { useEffect, useState } from 'react'
import { getOrderUrl, trackOrderClick } from '../../utils/analytics';

export default function StickyOrderButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("home");

    // Older browsers without IntersectionObserver just always show the bar
    if (!hero || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    // Only show the bar once the hero's own Order button has scrolled away
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-sm border-t border-gray-100 px-6 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      inert={!visible}
    >
      <a
        href={getOrderUrl("sticky_bar")}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center py-3 rounded-full bg-black text-white font-medium hover:bg-black/90 transition"
        onClick={() => trackOrderClick("sticky_mobile_order")}
      >
        Order Now
      </a>
    </div>
  )
}
