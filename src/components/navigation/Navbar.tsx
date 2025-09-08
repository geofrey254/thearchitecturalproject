'use client'
import { useState, useEffect } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'
import Link from 'next/link'

export default function MinimalistInteriorNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* Main Navigation */}
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-700 ease-out ${
          isScrolled
            ? 'bg-black/30 backdrop-blur-xl border-b border-white/5'
            : 'bg-black/30 backdrop-blur-sm border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 lg:h-24">
            {/* Logo - Ultra Minimal */}
            <div className="flex items-center">
              <div className="group cursor-pointer">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                      isScrolled ? 'border-amber-400/60' : 'border-white/40'
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        isScrolled ? 'bg-amber-400' : 'bg-white'
                      }`}
                    />
                  </div>
                  <div>
                    <h1
                      className={`text-lg lg:text-xl font-light tracking-[0.2em] transition-colors duration-300 ${
                        isScrolled ? 'text-white' : 'text-white'
                      }`}
                    >
                      WALTER
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Navigation - Ultra Clean */}
            <div className="hidden lg:flex items-center">
              <div className="flex items-center space-x-12">
                <Link
                  href="/"
                  className={`relative text-sm font-light tracking-wider transition-all duration-300 group ${
                    isScrolled ? 'text-white/90 hover:text-white' : 'text-white/80 hover:text-white'
                  }`}
                >
                  HOME
                  <div className="absolute -bottom-1 left-0 w-0 h-px bg-amber-400 group-hover:w-full transition-all duration-500"></div>
                </Link>

                <a
                  href="/services"
                  className={`relative text-sm font-light tracking-wider transition-all duration-300 group ${
                    isScrolled ? 'text-white/90 hover:text-white' : 'text-white/80 hover:text-white'
                  }`}
                >
                  SERVICES
                  <div className="absolute -bottom-1 left-0 w-0 h-px bg-amber-400 group-hover:w-full transition-all duration-500"></div>
                </a>

                <a
                  href="/portfolio"
                  className={`relative text-sm font-light tracking-wider transition-all duration-300 group ${
                    isScrolled ? 'text-white/90 hover:text-white' : 'text-white/80 hover:text-white'
                  }`}
                >
                  PORTFOLIO
                  <div className="absolute -bottom-1 left-0 w-0 h-px bg-amber-400 group-hover:w-full transition-all duration-500"></div>
                </a>

                <a
                  href="/about-us"
                  className={`relative text-sm font-light tracking-wider transition-all duration-300 group ${
                    isScrolled ? 'text-white/90 hover:text-white' : 'text-white/80 hover:text-white'
                  }`}
                >
                  ABOUT
                  <div className="absolute -bottom-1 left-0 w-0 h-px bg-amber-400 group-hover:w-full transition-all duration-500"></div>
                </a>

                <a
                  href="/contact-us"
                  className={`relative text-sm font-light tracking-wider transition-all duration-300 group ${
                    isScrolled ? 'text-white/90 hover:text-white' : 'text-white/80 hover:text-white'
                  }`}
                >
                  CONTACT
                  <div className="absolute -bottom-1 left-0 w-0 h-px bg-amber-400 group-hover:w-full transition-all duration-500"></div>
                </a>
              </div>
            </div>

            {/* Right Section - Minimal Contact */}
            <div className="hidden lg:flex items-center">
              <a
                href="tel:+1234567890"
                className={`flex items-center space-x-3 px-4 py-2 border rounded-full transition-all duration-300 group ${
                  isScrolled
                    ? 'border-white/20 hover:border-amber-400/50 hover:bg-amber-400/10'
                    : 'border-white/30 hover:border-amber-400/70 hover:bg-white/10'
                }`}
              >
                <Phone size={14} className="text-amber-400" />
                <span className="text-white/90 text-sm font-light tracking-wider">CALL US</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className={`lg:hidden p-2 rounded-full transition-all duration-300 ${
                isScrolled ? 'text-white hover:bg-white/10' : 'text-white hover:bg-white/10'
              }`}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-xl">
          <div className="flex flex-col h-full">
            {/* Spacer for navbar */}
            <div className="h-20"></div>

            {/* Menu Items */}
            <div className="flex-1 px-6 py-8">
              <div className="space-y-8">
                <Link
                  href="/"
                  className="block text-2xl font-light text-white/90 hover:text-white tracking-wider transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  HOME
                </Link>

                <a
                  href="/about-us"
                  className="block text-2xl font-light text-white/90 hover:text-white tracking-wider transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  ABOUT
                </a>

                <a
                  href="/services"
                  className="block text-2xl font-light text-white/90 hover:text-white tracking-wider transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  SERVICES
                </a>

                <a
                  href="/portfolio"
                  className="block text-2xl font-light text-white/90 hover:text-white tracking-wider transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  PORTFOLIO
                </a>

                <a
                  href="/contact-us"
                  className="block text-2xl font-light text-white/90 hover:text-white tracking-wider transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  CONTACT
                </a>
              </div>
            </div>

            {/* Mobile Contact Section */}
            <div className="px-6 py-8 border-t border-white/10">
              <div className="space-y-4">
                <a
                  href="tel:+1234567890"
                  className="flex items-center space-x-3 p-4 border border-white/20 rounded-none hover:border-amber-400/50 transition-colors"
                >
                  <Phone size={16} className="text-amber-400" />
                  <span className="text-white/90 font-light tracking-wider">+1 (234) 567-890</span>
                </a>

                <a
                  href="mailto:hello@luxeinteriors.com"
                  className="flex items-center space-x-3 p-4 border border-white/20 rounded-none hover:border-amber-400/50 transition-colors"
                >
                  <Mail size={16} className="text-amber-400" />
                  <span className="text-white/90 font-light tracking-wide uppercase">
                    walter@gmail.com
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
