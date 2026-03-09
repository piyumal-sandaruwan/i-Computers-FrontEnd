import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const slogans = [
  "Powering Your Future",
  "Precision Engineering, Every Byte",
  "Your Vision, Our Hardware",
  "The Next Generation of Computing ",
  "Plug Into the Future"
];

export default function Home() {
  const [currentSlogan, setCurrentSlogan] = useState("");
  const [sloganIndex, setSloganIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typeSpeed, setTypeSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = slogans[sloganIndex % slogans.length];
      
      if (!isDeleting) {
        setCurrentSlogan(fullText.substring(0, currentSlogan.length + 1));
        setTypeSpeed(100);
      } else {
        setCurrentSlogan(fullText.substring(0, currentSlogan.length - 1));
        setTypeSpeed(50);
      }

      if (!isDeleting && currentSlogan === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentSlogan === "") {
        setIsDeleting(false);
        setSloganIndex(prev => prev + 1);
      }
    };

    const timer = setTimeout(handleTyping, typeSpeed);
    return () => clearTimeout(timer);
  }, [currentSlogan, isDeleting, sloganIndex, typeSpeed]);

  return (
    <div className="relative min-h-screen text-white font-sans overflow-hidden">
      {/* Background Section with dark overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/home.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[90vh] px-6 text-center">
        <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter mb-4 animate-fade-in-down">
          i-<span className="text-blue-500">Computers</span>
        </h1>
        
        {/* Animated Slogan */}
        <div className="h-12 md:h-20 mb-8">
          <p className="text-xl md:text-3xl font-light text-gray-300">
            {currentSlogan}
            <span className="inline-block w-1 h-8 md:h-10 bg-blue-500 ml-1 animate-pulse"></span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Link 
            to="/products" 
            className="px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-blue-500/20"
          >
            Explore Inventory
          </Link>
          <Link 
            to="/about" 
            className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 rounded-full font-bold text-lg backdrop-blur-md transition-all"
          >
            Our Story
          </Link>
        </div>
      </div>

      {/* Modern Feature Section */}
      <div className="relative z-10 bg-black/40 backdrop-blur-xl border-t border-white/10 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Custom Builds", desc: "Tailored to your creative or gaming needs.", icon: "⚡" },
            { title: "Fast Delivery", desc: "Get your tech home in record time.", icon: "📦" },
            { title: "Expert Support", desc: "Lifetime technical assistance for every purchase.", icon: "🛠️" }
          ].map((item, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}