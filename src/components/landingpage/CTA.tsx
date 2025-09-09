import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PiCheckFatLight } from 'react-icons/pi'
import { BsArrowUpRight } from 'react-icons/bs'

export default function CTA() {
  return (
    <section className="bg-[url(/4.jpg)] bg-fixed bg-cover bg-center py-12 md:py-24 px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b bg-scroll md:bg-gradient-to-br from-black to-black/70 z-0"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-12 gap-8 lg:gap-16 items-center ">
          <div className="col-span-12 lg:col-span-6 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-4 mb-6">
              <div className="backdrop-blur-sm px-3 py-1 rounded-full border border-gray-200/90">
                <span className="text-xs font-medium text-white tracking-wide uppercase">
                  Since 2015
                </span>
              </div>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold capitalize text-white mb-6 leading-[0.9] tracking-tight">
              Where Spaces Inspire, <span className="text-amber-400">and Design Comes Alive</span>
            </h2>
            <div className="flex justify-center lg:justify-start mb-6">
              <ul className="grid grid-cols-1 md:grid-cols-2 md:gap-4 text-gray-300 font-semibold">
                <li className="flex  items-center gap-2 text-lg text-gray-300 mb-4">
                  <span className="font-semibold text-amber-400">
                    <PiCheckFatLight />
                  </span>
                  Latest technologies
                </li>
                <li className="flex items-center gap-2 text-lg text-gray-300 mb-4">
                  <span className="font-semibold text-amber-400">
                    <PiCheckFatLight />
                  </span>{' '}
                  5 Years of Experience
                </li>
                <li className="flex items-center gap-2 text-lg text-gray-300 mb-4">
                  <span className="font-semibold text-amber-400">
                    <PiCheckFatLight />
                  </span>{' '}
                  High-Quality Designs
                </li>
                <li className="flex items-center gap-2 text-lg text-gray-300 mb-4">
                  <span className="font-semibold text-amber-400">
                    <PiCheckFatLight />
                  </span>{' '}
                  Residential Design
                </li>
              </ul>
            </div>
            <p className="text-base md:text-lg text-gray-300 mb-8 max-w-3xl mx-auto lg:mx-0">
              Whether it{"'"}s your home, office, or a commercial project, we are always dedicated
              to bringing your vision to life. Our numbers speak better than words:
            </p>

            <div>
              <Link
                className="border border-white/65 px-4 py-2 rounded-full text-white flex w-[46%] md:w-[34%] items-center justify-between mx-auto lg:mx-0 hover:bg-amber-400 hover:shadow-lg transition-all duration-300"
                href="#"
              >
                Contact Us{' '}
                <span className="ml-2 font-semibold bg-amber-400 p-2 rounded-full">
                  <BsArrowUpRight />
                </span>
              </Link>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full h-[40vh] md:h-[90vh]">
              <Image
                fill
                src="/1.jpg"
                alt="House Background"
                className="rounded-2xl object-cover transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-2 md:-bottom-12 right-2 md:right-8 z-10 opacity-30 select-none pointer-events-none">
        <h3 className="text-white text-[6rem] md:text-[12rem] font-extrabold">walter</h3>
      </div>
    </section>
  )
}
