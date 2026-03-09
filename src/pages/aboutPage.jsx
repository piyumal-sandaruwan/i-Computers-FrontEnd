import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  const stats =[
    { label: "Happy Customers", value: "10k+" },
    { label: "Custom PCs Built", value: "5,000+" },
    { label: "Years in Business", value: "10+" },
    { label: "Support Rating", value: "4.9/5" }
  ];

  const values =[
    {
      title: "Uncompromising Quality",
      desc: "We source only the best components. Every build is rigorously stress-tested before it ever leaves our facility.",
      icon: "💎"
    },
    {
      title: "Passionate Expertise",
      desc: "Our team isn't just technicians; we are gamers, creators, and hardware enthusiasts who love what we do.",
      icon: "🔥"
    },
    {
      title: "Customer First",
      desc: "From the first consultation to lifetime support, your satisfaction is the heartbeat of our operation.",
      icon: "🤝"
    },
    {
      title: "Constant Innovation",
      desc: "Technology moves fast, and so do we. We are constantly updating our inventory with the latest next-gen hardware.",
      icon: "🚀"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-blue-500/30">
      
      {/* Hero Section */}
      <div className="relative py-24 md:py-32 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          {/* Fallback gradient if you don't have an about-bg.jpg */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-[#0a0a0a] to-[#0a0a0a]"></div>
          {/* Optional: Add a subtle animated glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-blue-500/10 blur-[120px] rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6">
            Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Future</span>, <br className="hidden md:block"/> One PC at a Time.
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light">
            We are more than just a computer store. We are architects of digital dreams, committed to engineering the ultimate hardware experience for gamers, professionals, and creators.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Story</h2>
            <div className="w-16 h-1 bg-blue-500 rounded-full"></div>
            <p className="text-gray-400 leading-relaxed text-lg">
              What started in a small garage with a passion for overclocking has grown into the premier destination for custom hardware. At i-Computers, we noticed a gap in the market: pre-built PCs were cutting corners, and building your own could be intimidating.
            </p>
            <p className="text-gray-400 leading-relaxed text-lg">
              We bridged that gap. We exist to provide unparalleled performance without the headache. Whether you are rendering complex 3D models, producing award-winning music, or competing in esports at the highest level, we build the engine that drives your success.
            </p>
          </div>
          
          {/* Image Placeholder - Replace src with your actual team/store image */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-black rounded-2xl border border-white/10 aspect-video overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1587202372634-32705e3bf49c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Inside a custom PC" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105 transform"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white/[0.02] border-y border-white/5 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="p-4">
                <div className="text-4xl md:text-5xl font-extrabold text-blue-500 mb-2">{stat.value}</div>
                <div className="text-gray-400 font-medium tracking-wide uppercase text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Our Core Values</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">The principles that guide every cable we route and every thermal paste we apply.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group hover:-translate-y-2">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform origin-left inline-block">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to experience the difference?</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Explore our latest inventory or reach out to our team to start planning your custom dream machine today.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            to="/products" 
            className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.3)]"
          >
            Shop Hardware
          </Link>
          <Link 
            to="/contact" 
            className="px-8 py-4 bg-transparent border border-white/20 hover:bg-white/10 text-white rounded-full font-bold text-lg transition-all"
          >
            Contact the Team
          </Link>
        </div>
      </div>
        
    </div>
  );
}