'use client'
import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'

export default function LogoCarousel() {
  return (
    <section className="relative bg-black py-20 w-full flex flex-col justify-center overflow-hidden h-[200px]">
      {/* Dynamic Architectural Background */}
      <div className="absolute inset-0">
        {/* Animated Grid System */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0 bg-gradient-to-br from-amber-400/10 via-transparent to-amber-400/5"
            style={{
              backgroundImage: `
                   linear-gradient(rgba(251, 191, 36, 0.1) 1px, transparent 1px),
                   linear-gradient(90deg, rgba(251, 191, 36, 0.1) 1px, transparent 1px)
                 `,
              backgroundSize: '60px 60px',
              animation: 'gridShift 20s linear infinite',
            }}
          ></div>
        </div>

        {/* Floating Architectural Elements */}
        <div
          className="absolute top-16 left-16 w-40 h-40 border-2 border-amber-400/20 rotate-45 animate-spin"
          style={{ animationDuration: '30s' }}
        ></div>
        <div
          className="absolute top-32 right-24 w-24 h-24 border border-amber-400/30 rounded-full animate-pulse"
          style={{ animationDuration: '4s' }}
        ></div>
        <div
          className="absolute bottom-24 left-1/3 w-32 h-2 bg-gradient-to-r from-transparent via-amber-400/30 to-transparent animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute bottom-16 right-16 w-28 h-28 border border-amber-400/25 rotate-12"
          style={{ animation: 'float 6s ease-in-out infinite' }}
        ></div>

        {/* Dynamic Lines */}
        <div
          className="absolute top-0 left-1/6 w-px h-full bg-gradient-to-b from-transparent via-amber-400/30 to-transparent animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute top-0 right-1/6 w-px h-full bg-gradient-to-b from-transparent via-amber-400/20 to-transparent animate-pulse"
          style={{ animationDelay: '3s' }}
        ></div>
        <div
          className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/25 to-transparent animate-pulse"
          style={{ animationDelay: '2.5s' }}
        ></div>

        {/* Corner Blueprints */}
        <div className="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-amber-400/40 animate-pulse"></div>
        <div
          className="absolute top-8 right-8 w-20 h-20 border-r-2 border-t-2 border-amber-400/40 animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute bottom-8 left-8 w-20 h-20 border-l-2 border-b-2 border-amber-400/40 animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-amber-400/40 animate-pulse"
          style={{ animationDelay: '3s' }}
        ></div>

        {/* Hexagonal Tech Elements */}
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2">
          <div
            className="w-16 h-16 border border-amber-400/20 transform rotate-30"
            style={{
              clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
              animation: 'pulse 3s infinite',
            }}
          ></div>
        </div>
      </div>

      {/* Sleek Carousel */}
      <div className="relative z-20 w-full max-w-6xl mx-auto">
        <Carousel
          opts={{
            align: 'center',
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2500,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="flex items-center -ml-6">
            <CarouselItem className="pl-6 basis-1/2 md:basis-1/3 lg:basis-1/4">
              <div className="group relative flex items-center justify-center py-8">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <Image
                  src="/logo1.png"
                  alt="Partner Logo 1"
                  width={160}
                  height={80}
                  className="filter brightness-0 invert hover:brightness-100 hover:invert-0 transition-all duration-500 object-contain group-hover:scale-110"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
                {/* Subtle Glow on Hover */}
                <div className="absolute inset-0 bg-amber-400/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
              </div>
            </CarouselItem>

            <CarouselItem className="pl-6 basis-1/2 md:basis-1/3 lg:basis-1/4">
              <div className="group relative flex items-center justify-center py-8">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <Image
                  src="/logo2.png"
                  alt="Partner Logo 2"
                  width={160}
                  height={80}
                  className="filter brightness-0 invert hover:brightness-100 hover:invert-0 transition-all duration-500 object-contain group-hover:scale-110"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
                <div className="absolute inset-0 bg-amber-400/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
              </div>
            </CarouselItem>

            <CarouselItem className="pl-6 basis-1/2 md:basis-1/3 lg:basis-1/4">
              <div className="group relative flex items-center justify-center py-8">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <Image
                  src="/logo1.png"
                  alt="Partner Logo 3"
                  width={160}
                  height={80}
                  className="filter brightness-0 invert hover:brightness-100 hover:invert-0 transition-all duration-500 object-contain group-hover:scale-110"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
                <div className="absolute inset-0 bg-amber-400/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
              </div>
            </CarouselItem>

            <CarouselItem className="pl-6 basis-1/2 md:basis-1/3 lg:basis-1/4">
              <div className="group relative flex items-center justify-center py-8">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <Image
                  src="/logo2.png"
                  alt="Partner Logo 4"
                  width={160}
                  height={80}
                  className="filter brightness-0 invert hover:brightness-100 hover:invert-0 transition-all duration-500 object-contain group-hover:scale-110"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
                <div className="absolute inset-0 bg-amber-400/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
              </div>
            </CarouselItem>

            <CarouselItem className="pl-6 basis-1/2 md:basis-1/3 lg:basis-1/4">
              <div className="group relative flex items-center justify-center py-8">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <Image
                  src="/logo1.png"
                  alt="Partner Logo 4"
                  width={160}
                  height={80}
                  className="filter brightness-0 invert hover:brightness-100 hover:invert-0 transition-all duration-500 object-contain group-hover:scale-110"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
                <div className="absolute inset-0 bg-amber-400/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
              </div>
            </CarouselItem>

            <CarouselItem className="pl-6 basis-1/2 md:basis-1/3 lg:basis-1/4">
              <div className="group relative flex items-center justify-center py-8">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <Image
                  src="/logo2.png"
                  alt="Partner Logo 4"
                  width={160}
                  height={80}
                  className="filter brightness-0 invert hover:brightness-100 hover:invert-0 transition-all duration-500 object-contain group-hover:scale-110"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
                <div className="absolute inset-0 bg-amber-400/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>

      {/* Custom CSS for Additional Animations */}
      <style jsx>{`
        @keyframes gridShift {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(60px, 60px);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(12deg);
          }
          50% {
            transform: translateY(-10px) rotate(12deg);
          }
        }

        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-from), var(--tw-gradient-to));
        }
      `}</style>
    </section>
  )
}
