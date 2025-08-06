"use client"
import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Play, 
  Award, 
  Users, 
  Building2, 
  Compass,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const heroSlides = [
    {
      title: "Crafting Tomorrow's",
      highlight: "Architecture",
      subtitle: "Today",
      description: "We transform visionary concepts into breathtaking architectural realities that define skylines and inspire communities.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      stats: "200+ Projects Completed"
    },
    {
      title: "Sustainable Design",
      highlight: "Meets",
      subtitle: "Innovation",
      description: "Our LEED-certified designs harmonize environmental responsibility with cutting-edge architectural innovation.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80",
      stats: "95% Sustainability Rating"
    },
    {
      title: "Where Form",
      highlight: "Follows",
      subtitle: "Function",
      description: "Every line, every curve, every space is meticulously designed to enhance human experience and maximize functionality.",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      stats: "15+ Industry Awards"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const currentHero = heroSlides[currentSlide];

  return (
    <section className="relative h-screen overflow-hidden bg-slate-900">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <div className="relative h-full w-full">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                index === currentSlide 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-105'
              }`}
            >
              <img
                src={slide.image}
                alt="Architectural Design"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/50 to-slate-900/30"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Geometric Design Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 border-2 border-amber-400/30 transform rotate-45 animate-pulse"></div>
        <div className="absolute bottom-40 left-10 w-24 h-24 border border-amber-400/20 transform -rotate-12"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-amber-400/10 transform rotate-45"></div>
        
        {/* Blueprint Lines */}
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-amber-400/20 to-transparent"></div>
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center px-24">
        <div className="w-full mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="text-white space-y-8">
              
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 backdrop-blur-sm">
                <Award size={16} className="text-amber-400" />
                <span className="text-amber-400 text-sm font-medium uppercase tracking-wider">
                  Award-Winning Designs
                </span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-light leading-tight">
                  <span className="block">{currentHero.title}</span>
                 
                </h1>
                
                {/* Animated Line */}
                <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 transform origin-left animate-pulse"></div>
              </div>

              {/* Description */}
              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                {currentHero.description}
              </p>

              {/* Stats */}
              <div className="flex items-center space-x-8 text-sm">
                <div className="flex items-center space-x-2">
                  <Building2 size={20} className="text-amber-400" />
                  <span className="text-slate-300">{currentHero.stats}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users size={20} className="text-amber-400" />
                  <span className="text-slate-300">50+ Expert Architects</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                
                {/* Primary CTA */}
                <button className="group relative bg-amber-500 hover:bg-amber-400 text-slate-900 px-8 py-4 font-semibold uppercase tracking-wider text-sm transition-all duration-300 overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    Explore Our Work
                    <ArrowRight size={18} className="ml-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                </button>

                {/* Secondary CTA - Video */}
                <button 
                  onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                  className="group flex items-center space-x-3 text-white hover:text-amber-400 transition-colors"
                >
                  <div className="w-12 h-12 border-2 border-white group-hover:border-amber-400 rounded-full flex items-center justify-center transition-colors">
                    <Play size={16} className="ml-0.5" />
                  </div>
                  <div>
                    <span className="font-semibold block">Watch Our Story</span>
                    <span className="text-slate-400 text-sm">3 min showcase</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Right Content - Feature Stats */}
            <div className="lg:flex justify-end hidden">
              <div className="w-[500px] bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 space-y-8">
                
                {/* Project Stats */}
                <div className="text-center">
                  <div className="text-5xl font-bold text-amber-400 mb-2">200+</div>
                  <div className="text-white text-lg uppercase tracking-wider">Projects Delivered</div>
                  <div className="w-16 h-px bg-amber-400 mx-auto mt-3"></div>
                </div>

                <div className="text-center">
                  <div className="text-5xl font-bold text-amber-400 mb-2">15+</div>
                  <div className="text-white text-lg uppercase tracking-wider">Years Experience</div>
                  <div className="w-16 h-px bg-amber-400 mx-auto mt-3"></div>
                </div>

                <div className="text-center">
                  <div className="text-5xl font-bold text-amber-400 mb-2">25+</div>
                  <div className="text-white text-lg uppercase tracking-wider">Awards Won</div>
                  <div className="w-16 h-px bg-amber-400 mx-auto mt-3"></div>
                </div>

                {/* Location */}
                <div className="pt-6 border-t border-white/20 text-center">
                  <div className="flex items-center justify-center space-x-2 text-white mb-2">
                    <Compass size={16} className="text-amber-400" />
                    <span className="text-base">Based in Design City</span>
                  </div>
                  <div className="text-slate-300 text-xs">Serving clients worldwide</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4">
          <button 
            onClick={prevSlide}
            className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-amber-500 hover:border-amber-500 transition-all duration-300"
          >
            <ChevronLeft size={20} />
          </button>
          
          {/* Slide Indicators */}
          <div className="flex items-center space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-amber-400 w-8' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
          
          <button 
            onClick={nextSlide}
            className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-amber-500 hover:border-amber-500 transition-all duration-300"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-20">
        <div className="flex flex-col items-center space-y-2 text-white/60">
          <div className="w-px h-16 bg-gradient-to-b from-amber-400/60 to-transparent"></div>
          <span className="text-xs uppercase tracking-widest transform -rotate-90 origin-center whitespace-nowrap">
            Scroll Down
          </span>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoPlaying && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setIsVideoPlaying(false)}
              className="absolute -top-12 right-0 text-white hover:text-amber-400 transition-colors"
            >
              ✕ Close
            </button>
            <div className="bg-slate-800 rounded-lg aspect-video flex items-center justify-center">
              <div className="text-white text-center">
                <Play size={48} className="mx-auto mb-4 text-amber-400" />
                <p>Video Player Placeholder</p>
                <p className="text-sm text-slate-400 mt-2">Your architectural showcase video would play here</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}