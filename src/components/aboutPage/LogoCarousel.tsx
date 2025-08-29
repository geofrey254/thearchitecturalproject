'use client'
import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'

export default function LogoCarousel() {
  return (
    <section className="bg-white py-2 w-full flex flex-col justify-center">
      <Carousel
        opts={{
          align: 'center',
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full max-w-6xl"
      >
        <CarouselContent className="flex items-center">
          <CarouselItem className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/3">
            <div className="flex items-center justify-center">
              <Image
                src="/logo1.png"
                alt="Logo 1"
                width={150}
                height={75}
                className="mx-4 grayscale"
              />
            </div>
          </CarouselItem>
          <CarouselItem className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/3">
            <div className="flex items-center justify-center">
              <Image
                src="/logo2.png"
                alt="Logo 1"
                width={150}
                height={75}
                className="mx-4 grayscale"
              />
            </div>
          </CarouselItem>
          <CarouselItem className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/3">
            <div className="flex items-center justify-center">
              <Image
                src="/logo1.png"
                alt="Logo 1"
                width={150}
                height={75}
                className="mx-4 grayscale"
              />
            </div>
          </CarouselItem>
          <CarouselItem className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/3">
            <div className="flex items-center justify-center">
              <Image
                src="/logo2.png"
                alt="Logo 1"
                width={150}
                height={75}
                className="mx-4 grayscale"
              />
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  )
}
