"use client"
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Calendar } from 'lucide-react';

export default function ArchitecturalNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Update time every minute
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (dropdown:any) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
      <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-2xl border-b-2 border-amber-400/30' 
          : 'bg-white/90 backdrop-blur-md'
      }`}>
        <div className="mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo Section with Architectural Elements */}
            <div className="flex items-center">
              <div className="relative">
                {/* Geometric Logo Design */}
                <div className="flex items-center space-x-4">
                  <div className="relative w-12 h-12">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 transform rotate-45 rounded-sm"></div>
                    <div className="absolute inset-1 bg-white transform rotate-45 rounded-sm"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-bold text-slate-900 text-lg">A</span>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-2xl font-light text-slate-900 tracking-wider">
                      ARCHI<span className="font-bold text-amber-500">STUDIO</span>
                    </h1>
                    <p className="text-xs text-slate-500 uppercase tracking-widest">Design • Build • Inspire</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Navigation with Architectural Grid Lines */}
            <div className="hidden lg:flex items-center">
              <div className="relative flex items-center space-x-8 px-8">
                {/* Subtle grid background effect */}
                <div className="absolute inset-0 opacity-5 bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
                
                <a href="/" className="relative group py-2">
                  <span className="text-slate-700 font-medium transition-colors duration-300 group-hover:text-amber-600">
                    Home
                  </span>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 group-hover:w-full transition-all duration-400"></div>
                </a>
                
                {/* Services with Blueprint-style Dropdown */}
                <div className="relative group">
                  <button
                    onClick={() => toggleDropdown('services')}
                    className="flex items-center py-2 text-slate-700 font-medium hover:text-amber-600 transition-colors duration-300"
                  >
                    Services
                    <ChevronDown size={16} className={`ml-2 transition-transform duration-300 ${
                      activeDropdown === 'services' ? 'rotate-180' : ''
                    }`} />
                  </button>
                  
                  {activeDropdown === 'services' && (
                    <div className="absolute top-full left-0 mt-4 w-80 bg-white rounded-none shadow-2xl border-l-4 border-amber-400 overflow-hidden">
                      {/* Blueprint-style header */}
                      <div className="bg-slate-900 text-white p-4">
                        <h3 className="font-bold text-amber-400 uppercase tracking-wider text-sm">Our Services</h3>
                        <div className="w-full h-px bg-amber-400 mt-2"></div>
                      </div>
                      <div className="bg-white">
                        {[
                          { title: 'Residential Design', desc: 'Custom homes & renovations', href: '/services/residential' },
                          { title: 'Commercial Architecture', desc: 'Office buildings & retail spaces', href: '/services/commercial' },
                          { title: 'Interior Design', desc: 'Complete interior solutions', href: '/services/interior' },
                          { title: 'Urban Planning', desc: 'City development & zoning', href: '/services/urban-planning' }
                        ].map((service, i) => (
                          <a key={i} href={service.href} className="flex items-start p-4 hover:bg-amber-50 transition-colors group border-l-2 border-transparent hover:border-amber-400">
                            <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 mr-3 opacity-60"></div>
                            <div>
                              <h4 className="font-semibold text-slate-900 group-hover:text-amber-700">{service.title}</h4>
                              <p className="text-sm text-slate-600 mt-1">{service.desc}</p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Projects Dropdown */}
                <div className="relative group">
                  <button
                    onClick={() => toggleDropdown('projects')}
                    className="flex items-center py-2 text-slate-700 font-medium hover:text-amber-600 transition-colors duration-300"
                  >
                    Projects
                    <ChevronDown size={16} className={`ml-2 transition-transform duration-300 ${
                      activeDropdown === 'projects' ? 'rotate-180' : ''
                    }`} />
                  </button>
                  
                  {activeDropdown === 'projects' && (
                    <div className="absolute top-full left-0 mt-4 w-72 bg-white rounded-none shadow-2xl border-l-4 border-amber-400">
                      <div className="bg-slate-900 text-white p-4">
                        <h3 className="font-bold text-amber-400 uppercase tracking-wider text-sm">Our Work</h3>
                        <div className="w-full h-px bg-amber-400 mt-2"></div>
                      </div>
                      <div className="py-2">
                        {[
                          'Featured Projects',
                          'Residential Portfolio',
                          'Commercial Work',
                          'Awards & Recognition'
                        ].map((item, i) => (
                          <a key={i} href="#" className="flex items-center px-6 py-3 text-slate-700 hover:bg-amber-50 hover:text-amber-700 transition-colors border-l-2 border-transparent hover:border-amber-400">
                            <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-3"></div>
                            {item}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <a href="/about" className="relative group py-2">
                  <span className="text-slate-700 font-medium transition-colors duration-300 group-hover:text-amber-600">
                    About
                  </span>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 group-hover:w-full transition-all duration-400"></div>
                </a>
                
                <a href="/contact" className="relative group py-2">
                  <span className="text-slate-700 font-medium transition-colors duration-300 group-hover:text-amber-600">
                    Contact
                  </span>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 group-hover:w-full transition-all duration-400"></div>
                </a>
              </div>
            </div>

            {/* Right Section - Contact & CTA */}
            <div className="hidden lg:flex items-center space-x-6">
              {/* Phone with Modern Design */}
              <div className="flex items-center space-x-3 p-3 bg-slate-100 rounded-lg hover:bg-amber-50 transition-colors group">
                <div className="flex items-center justify-center w-10 h-10 bg-amber-400 rounded-full group-hover:bg-amber-500 transition-colors">
                  <Phone size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wide font-medium">Call Direct</p>
                  <a href="tel:+15551234567" className="text-slate-900 hover:text-amber-600 transition-colors font-semibold text-sm">
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>

              {/* Modern CTA Button */}
              <a href="/consultation">
                <button className="relative overflow-hidden bg-slate-900 text-white px-8 py-4 font-medium uppercase tracking-wider text-sm hover:bg-amber-500 transition-all duration-300 group">
                  <span className="relative z-10">Free Consultation</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                </button>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-slate-700 hover:text-amber-600 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200">
            <div className="px-6 py-6 space-y-6">
              <a href="/" className="block text-slate-700 hover:text-amber-600 font-medium py-2 transition-colors">
                Home
              </a>
              
              <div>
                <button
                  onClick={() => toggleDropdown('mobile-services')}
                  className="flex items-center justify-between w-full text-slate-700 hover:text-amber-600 font-medium py-2 transition-colors"
                >
                  Services
                  <ChevronDown size={16} className={`transition-transform duration-300 ${
                    activeDropdown === 'mobile-services' ? 'rotate-180' : ''
                  }`} />
                </button>
                {activeDropdown === 'mobile-services' && (
                  <div className="ml-4 mt-3 space-y-3 border-l-2 border-amber-400 pl-4">
                    <a href="/services/residential" className="block text-slate-600 hover:text-amber-600 transition-colors">Residential Design</a>
                    <a href="/services/commercial" className="block text-slate-600 hover:text-amber-600 transition-colors">Commercial Architecture</a>
                    <a href="/services/interior" className="block text-slate-600 hover:text-amber-600 transition-colors">Interior Design</a>
                    <a href="/services/urban-planning" className="block text-slate-600 hover:text-amber-600 transition-colors">Urban Planning</a>
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => toggleDropdown('mobile-projects')}
                  className="flex items-center justify-between w-full text-slate-700 hover:text-amber-600 font-medium py-2 transition-colors"
                >
                  Projects
                  <ChevronDown size={16} className={`transition-transform duration-300 ${
                    activeDropdown === 'mobile-projects' ? 'rotate-180' : ''
                  }`} />
                </button>
                {activeDropdown === 'mobile-projects' && (
                  <div className="ml-4 mt-3 space-y-3 border-l-2 border-amber-400 pl-4">
                    <a href="/projects/featured" className="block text-slate-600 hover:text-amber-600 transition-colors">Featured Projects</a>
                    <a href="/projects/residential" className="block text-slate-600 hover:text-amber-600 transition-colors">Residential Portfolio</a>
                    <a href="/projects/commercial" className="block text-slate-600 hover:text-amber-600 transition-colors">Commercial Work</a>
                    <a href="/projects/awards" className="block text-slate-600 hover:text-amber-600 transition-colors">Awards & Recognition</a>
                  </div>
                )}
              </div>

              <a href="/about" className="block text-slate-700 hover:text-amber-600 font-medium py-2 transition-colors">
                About
              </a>
              <a href="/contact" className="block text-slate-700 hover:text-amber-600 font-medium py-2 transition-colors">
                Contact
              </a>
              
              {/* Mobile Contact & CTA */}
              <div className="pt-6 border-t border-slate-200 space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-slate-100 rounded-lg">
                  <Phone size={20} className="text-amber-500" />
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wide">Call Us</p>
                    <a href="tel:+15551234567" className="text-slate-900 hover:text-amber-600 transition-colors font-semibold">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
                <a href="/consultation" className="block">
                  <button className="w-full bg-gradient-to-r from-slate-900 to-slate-800 text-white py-4 font-medium uppercase tracking-wider hover:from-amber-500 hover:to-amber-600 transition-all duration-300">
                    Free Consultation
                  </button>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
  );
}