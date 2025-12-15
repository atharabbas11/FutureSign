import React from "react";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const ClientsCarousel = ({ clients = [] }) => {
  const [offset, setOffset] = useState(0);
  const containerRef = useRef(null);
  const speed = 0.5; // adjust speed
  const [isDragging, setIsDragging] = useState(false);

  // Default clients if none provided
  const defaultClients = [
    "/public/images/logos/acc.png",
    "/public/images/logos/afstar.png",
    "/public/images/logos/ambuja.png",
    "/public/images/logos/hangyo.jpg",
    "/public/images/logos/maha.png",
    "/public/images/logos/mslife.png",
    "/public/images/logos/ramco.jpg",
    "/public/images/logos/sudhakar.png",
    "/public/images/logos/supreme.png",
    "/public/images/logos/ultratech.png",
  ];

  // Use provided clients or default ones
  const clientLogos = clients.length > 0 ? clients : defaultClients;

  // Auto-scroll
  useEffect(() => {
    let animationFrame;
    
    const animate = () => {
      if (!isDragging && containerRef.current) {
        setOffset((prev) => {
          const containerWidth = containerRef.current.scrollWidth / 2;
          let next = prev - speed;
          if (Math.abs(next) >= containerWidth) next = 0; // loop back
          return next;
        });
      }
      animationFrame = requestAnimationFrame(animate);
    };
    
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isDragging]);

  // Don't render if no clients at all
  if (clientLogos.length === 0) {
    return null;
  }

  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-gray-700 mb-2">
            Trusted By Industry Leaders
          </h3>
          <p className="text-gray-500">Brands that choose quality and reliability</p>
        </div>
        
        <div className="overflow-hidden relative">
          <motion.div
            ref={containerRef}
            className="flex gap-12 cursor-grab"
            drag="x"
            dragConstraints={{ left: -1000, right: 0 }}
            dragElastic={0.2}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
            style={{ x: offset }}
          >
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-40 h-40 flex items-center justify-center bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <img
                  src={logo}
                  alt={`Client ${index}`}
                  className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </motion.div>
          
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default ClientsCarousel;