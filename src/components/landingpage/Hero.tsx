'use client'
import { useState, useEffect, useCallback } from 'react'
import { ArrowRight, ArrowLeft, ChevronDown, Play, Pause } from 'lucide-react'

export default function ModernInteriorHero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [progress, setProgress] = useState(0)

  const slides = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&h=1080&fit=crop&crop=center',
      alt: 'Luxurious modern living room',
      title: 'TIMELESS',
      subtitle: 'ELEGANCE',
      description: 'Where comfort meets sophistication in every detail',
      category: 'RESIDENTIAL',
      year: '2024',
      featured: true,
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop&crop=center',
      alt: 'Contemporary office space',
      title: 'PRODUCTIVE',
      subtitle: 'SPACES',
      description: 'Environments designed to inspire creativity and focus',
      category: 'COMMERCIAL',
      year: '2024',
      featured: false,
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&h=1080&fit=crop&crop=center',
      alt: 'Sustainable interior design',
      title: 'CONSCIOUS',
      subtitle: 'DESIGN',
      description: 'Beauty in perfect harmony with nature',
      category: 'SUSTAINABLE',
      year: '2024',
      featured: true,
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&h=1080&fit=crop&crop=center',
      alt: 'Custom interior details',
      title: 'BESPOKE',
      subtitle: 'DETAILS',
      description: 'Every element crafted to tell your unique story',
      category: 'CUSTOM',
      year: '2024',
      featured: false,
    },
  ]

  const changeSlide = useCallback(
    (newIndex: number) => {
      if (isAnimating) return
      setIsAnimating(true)
      setCurrentSlide(newIndex)
      setProgress(0)
      setTimeout(() => setIsAnimating(false), 1200)
    },
    [isAnimating],
  )

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          changeSlide((currentSlide + 1) % slides.length)
          return 0
        }
        return prev + 100 / 70
      })
    }, 100)

    return () => clearInterval(progressTimer)
  }, [currentSlide, isAutoPlaying, changeSlide, slides.length])

  useEffect(() => {
    setIsLoaded(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const goToSlide = (index: number) => changeSlide(index)
  const goToPrevious = () => changeSlide((currentSlide - 1 + slides.length) % slides.length)
  const goToNext = () => changeSlide((currentSlide + 1) % slides.length)
  const toggleAutoPlay = () => setIsAutoPlaying(!isAutoPlaying)

  const currentSlideData = slides[currentSlide]

  return (
    <section className="relative h-[90vh] md:min-h-screen overflow-hidden bg-black mt-20">
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1200 ease-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-1200 ease-out"
              style={{
                backgroundImage: `url(${slide.src})`,
                transform: `scale(${index === currentSlide ? 1.02 : 1.08})`,
              }}
            />
            {/* Enhanced Multi-layer Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-black/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/20" />

            {/* Subtle Noise Texture */}
            <div
              className="absolute inset-0 opacity-10 mix-blend-multiply"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Main Content - Improved Grid Layout */}
      <div className="absolute inset-0 z-10">
        <div className="h-[75vh] md:h-full flex flex-col lg:grid lg:grid-cols-12 lg:grid-rows-12 gap-4 lg:gap-12 p-6 sm:p-8 lg:py-20 lg:px-12 2xl:py-20 2xl:px-12">
          {/* Category & Year Badge - Top Left */}
          <div className="lg:col-span-3 lg:row-span-1 flex items-start justify-start">
            <div
              className={`transform transition-all duration-1000 delay-300 ${
                isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="px-3 py-1 bg-amber-400/10 border border-amber-400/20 rounded-full backdrop-blur-sm">
                  <span className="text-amber-400 text-xs font-medium tracking-wider">
                    {currentSlideData.category}
                  </span>
                </div>
                <div className="text-white/60 text-sm font-light">{currentSlideData.year}</div>
              </div>
            </div>
          </div>

          {/* Main Typography */}
          <div className="flex-1 lg:col-span-12 lg:row-span-6 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
            <div className="space-y-2 lg:space-y-2 2xl:space-y-6 max-w-4xl">
              {/* Main Title */}
              <div className="overflow-hidden">
                <h1
                  className={`text-6xl lg:text-8xl xl:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-100 to-amber-300 leading-none tracking-tight transform transition-all duration-1200 ease-out ${
                    isLoaded ? 'translate-y-0' : 'translate-y-full'
                  }`}
                  style={{
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                  }}
                >
                  {currentSlideData.title}
                </h1>
              </div>

              {/* Subtitle */}
              <div className="overflow-hidden">
                <h2
                  className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extralight text-white/95 leading-none tracking-[0.2em] transform transition-all duration-1200 ease-out delay-200 ${
                    isLoaded ? 'translate-y-0' : 'translate-y-full'
                  }`}
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  {currentSlideData.subtitle}
                </h2>
              </div>

              {/* Description */}
              <div className="overflow-hidden pt-4 lg:pt-6">
                <p
                  className={`text-lg lg:text-xl text-white/70 font-light leading-relaxed max-w-lg transform transition-all duration-1200 ease-out delay-500 ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                  }`}
                >
                  {currentSlideData.description}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Controls Section */}
          <div className="lg:col-span-12 lg:row-span-2 flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0 pt-8 lg:pt-0">
            {/* Progress & Navigation */}
            <div className="flex items-center space-x-8">
              {/* Slide Progress */}
              <div className="flex items-center space-x-4">
                <span className="text-white/40 text-sm font-mono">
                  {String(currentSlide + 1).padStart(2, '0')}
                </span>
                <div className="relative w-20 h-px bg-white/20">
                  <div
                    className="absolute left-0 top-0 h-full bg-gradient-to-r from-amber-400 to-amber-300 transition-all duration-100 ease-linear"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <span className="text-white/40 text-sm font-mono">
                  {String(slides.length).padStart(2, '0')}
                </span>
              </div>

              {/* Auto-play Toggle */}
              <button
                onClick={toggleAutoPlay}
                className="group p-2 hover:bg-white/5 rounded-full transition-colors duration-300"
              >
                {isAutoPlaying ? (
                  <Pause className="w-4 h-4 text-white/60 group-hover:text-amber-400" />
                ) : (
                  <Play className="w-4 h-4 text-white/60 group-hover:text-amber-400" />
                )}
              </button>
            </div>

            {/* Slide Dots */}
            <div className="flex items-center space-x-3">
              {slides.map((slide, index) => (
                <button key={slide.id} onClick={() => goToSlide(index)} className="group relative">
                  <div className="relative overflow-hidden">
                    <div
                      className={`transition-all duration-500 ease-out ${
                        index === currentSlide
                          ? 'w-12 h-1 bg-gradient-to-r from-amber-400 to-amber-300 rounded-full'
                          : 'w-8 h-1 bg-white/20 rounded-full group-hover:bg-white/40 group-hover:w-10'
                      }`}
                    />
                    {slide.featured && (
                      <div className="absolute -top-2 -right-1 w-1 h-1 bg-amber-400 rounded-full" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center space-x-4">
              <button
                onClick={goToPrevious}
                disabled={isAnimating}
                className="group disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <div className="w-14 h-14 bg-white/5 backdrop-blur-md border border-white/10 rounded-full hover:bg-white/10 hover:border-amber-400/30 transition-all duration-500 flex items-center justify-center group-hover:scale-105 group-active:scale-95">
                  <ArrowLeft className="w-5 h-5 text-white group-hover:text-amber-400 transition-colors duration-300" />
                </div>
              </button>
              <button
                onClick={goToNext}
                disabled={isAnimating}
                className="group disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <div className="w-14 h-14 bg-white/5 backdrop-blur-md border border-white/10 rounded-full hover:bg-white/10 hover:border-amber-400/30 transition-all duration-500 flex items-center justify-center group-hover:scale-105 group-active:scale-95">
                  <ArrowRight className="w-5 h-5 text-white group-hover:text-amber-400 transition-colors duration-300" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
        {/* Large Typography Shadow with Gradient */}
        <div className="absolute top-1/2 -left-20 lg:left-0 transform -translate-y-1/2 opacity-5">
          <h2
            className="text-[15rem] lg:text-[25rem] xl:text-[30rem] font-black leading-none select-none"
            style={{
              background:
                'linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(251,191,36,0.1) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {String(currentSlide + 1).padStart(2, '0')}
          </h2>
        </div>

        {/* Animated Geometric Shapes */}
        <div className="absolute top-20 right-20 hidden lg:block">
          <div
            className="w-40 h-40 border border-amber-400/5 rotate-45 animate-spin"
            style={{
              animationDuration: '25s',
              background:
                'conic-gradient(from 0deg, transparent, rgba(251,191,36,0.05), transparent)',
            }}
          />
        </div>

        <div className="absolute bottom-32 left-20 hidden lg:block">
          <div className="w-32 h-32 rounded-full border border-white/5 animate-pulse">
            <div
              className="w-full h-full rounded-full bg-gradient-to-br from-amber-400/5 to-transparent animate-pulse"
              style={{ animationDelay: '1s' }}
            />
          </div>
        </div>

        {/* Refined Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center space-y-3 group cursor-pointer">
          <div className="text-white/40 text-xs font-light tracking-wider uppercase">Scroll</div>
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
          <div className="animate-bounce group-hover:animate-pulse">
            <ChevronDown className="w-4 h-4 text-white/40 group-hover:text-amber-400 transition-colors duration-300" />
          </div>
        </div>
      </div>
    </section>
  )
}
